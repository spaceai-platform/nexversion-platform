import assert from "node:assert/strict";
import { test } from "node:test";

import {
  createUiRefinementEngine,
  refineGeneratedApp,
} from "../src/ui-refinement-engine.js";

test("adds the refinement stylesheet and body scope", () => {
  const result = refineGeneratedApp({
    html: "<html><body><main><h1>Hello</h1></main></body></html>",
    css: "h1 { color: red; }",
  });

  assert.match(result.css, /ui-refinement-engine/);
  assert.match(result.css, /--ui-refine-brand/);
  assert.match(result.css, /clamp\(2\.75rem, 8vw, 6\.5rem\)/);
  assert.match(result.html, /<body data-ui-refined="true">/);
  assert.equal(result.report.addedBodyScope, true);
  assert.equal(result.report.refinements.spacing, true);
  assert.equal(result.report.refinements.typography, true);
  assert.equal(result.report.refinements.hierarchy, true);
  assert.equal(result.report.refinements.cards, true);
  assert.equal(result.report.refinements.responsiveness, true);
});

test("annotates likely primary CTAs", () => {
  const result = refineGeneratedApp({
    html: '<body><a href="/signup">Get started</a><button class="secondary">Cancel</button></body>',
  });

  assert.match(
    result.html,
    /<a href="\/signup" data-ui-refined-cta="primary">Get started<\/a>/,
  );
  assert.doesNotMatch(
    result.html,
    /<button class="secondary" data-ui-refined-cta="primary">Cancel<\/button>/,
  );
  assert.equal(result.report.annotatedCtas, 1);
  assert.equal(result.report.refinements.ctaVisibility, true);
});

test("uses class names to identify generated app CTAs", () => {
  const result = refineGeneratedApp({
    html: '<body><button class="btn-primary">Continue</button></body>',
  });

  assert.match(
    result.html,
    /<button class="btn-primary" data-ui-refined-cta="primary">Continue<\/button>/,
  );
  assert.equal(result.report.annotatedCtas, 1);
});

test("keeps existing refinement markers idempotent", () => {
  const input = {
    html: '<body data-ui-refined="true"><button data-ui-refined-cta="primary">Try now</button></body>',
    css: "/* ui-refinement-engine */\nbody { color: black; }",
  };

  const result = refineGeneratedApp(input);

  assert.equal(result.html, input.html);
  assert.equal(result.css, input.css);
  assert.equal(result.report.annotatedCtas, 0);
});

test("supports configured design tokens through the engine factory", () => {
  const engine = createUiRefinementEngine({
    brandColor: "#0ea5e9",
    accentColor: "#14b8a6",
    scopeSelector: ":where(.generated-app)",
  });

  const result = engine.refine({
    html: '<body><button class="cta">Book demo</button></body>',
  });

  assert.match(result.css, /:where\(\.generated-app\)/);
  assert.match(result.css, /--ui-refine-brand: #0ea5e9/);
  assert.match(result.css, /--ui-refine-accent: #14b8a6/);
  assert.equal(result.report.annotatedCtas, 1);
});

test("rejects invalid app payloads", () => {
  assert.throws(() => refineGeneratedApp(null), /expects an app object/);
});
