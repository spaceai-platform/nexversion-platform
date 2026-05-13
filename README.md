# nexversion-platform

Platform utilities for improving generated applications.

## UI refinement engine

The UI refinement engine automatically improves generated app markup by adding a
progressive CSS design layer and annotating likely primary calls to action.

It focuses on:

- spacing rhythm and layout width
- typography scale and readable line length
- visual hierarchy for headings and sections
- modern card surfaces, borders, shadows, and hover states
- responsive grids, page gutters, and mobile CTA behavior
- CTA visibility through gradient treatment, touch targets, and focus states

```js
import { refineGeneratedApp } from "nexversion-platform";

const refined = refineGeneratedApp({
  html: '<body><main><a href="/signup">Get started</a></main></body>',
  css: "main { display: grid; }",
});

console.log(refined.html);
console.log(refined.css);
console.log(refined.report);
```

The engine is dependency-free and framework-agnostic. Pass generated `html` and
`css`, then write the returned values back into the generated app artifact.

### Configuration

```js
import { createUiRefinementEngine } from "nexversion-platform";

const engine = createUiRefinementEngine({
  brandColor: "#0ea5e9",
  accentColor: "#14b8a6",
  scopeSelector: ":where(.generated-app)",
});

const refined = engine.refine({ html, css });
```

Run validation with:

```sh
npm test
```
