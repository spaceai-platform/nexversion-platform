const DEFAULT_OPTIONS = {
  scopeSelector: ":where(html)",
  brandColor: "#2563eb",
  accentColor: "#7c3aed",
  textColor: "#0f172a",
  mutedTextColor: "#475569",
  surfaceColor: "#ffffff",
  pageBackground: "#f8fafc",
  fontFamily:
    'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  minimumTouchTarget: "2.75rem",
  includeReset: true,
};

const CTA_CLASS_RE =
  /\b(cta|primary|button|btn|signup|sign-up|get-started|start|buy|subscribe|contact|demo|trial)\b/i;
const CTA_TEXT_RE =
  /\b(get started|start now|try now|try for free|sign up|signup|subscribe|buy now|contact sales|book demo|request demo|learn more|download|join now)\b/i;
const CTA_TAG_RE = /<(a|button)\b([^>]*)>([\s\S]*?)<\/\1>/gi;
const BODY_OPEN_RE = /<body\b([^>]*)>/i;

/**
 * Create a framework-agnostic UI refinement engine for generated app markup.
 *
 * @param {Partial<typeof DEFAULT_OPTIONS>} options
 */
export function createUiRefinementEngine(options = {}) {
  const resolvedOptions = { ...DEFAULT_OPTIONS, ...options };

  return {
    options: resolvedOptions,
    refine(app) {
      return refineGeneratedApp(app, resolvedOptions);
    },
  };
}

/**
 * Improve generated HTML/CSS with a progressive design layer.
 *
 * @param {{ html?: string, css?: string, name?: string }} app
 * @param {Partial<typeof DEFAULT_OPTIONS>} options
 */
export function refineGeneratedApp(app, options = {}) {
  if (!app || typeof app !== "object") {
    throw new TypeError("refineGeneratedApp expects an app object.");
  }

  const resolvedOptions = { ...DEFAULT_OPTIONS, ...options };
  const report = createEmptyReport();
  const html = typeof app.html === "string" ? app.html : "";
  const css = typeof app.css === "string" ? app.css : "";

  const refinedHtml = refineHtml(html, report);
  const refinementCss = buildRefinementStyles(resolvedOptions);
  const refinedCss = mergeCss(css, refinementCss);

  report.refinements.spacing = true;
  report.refinements.typography = true;
  report.refinements.hierarchy = true;
  report.refinements.cards = true;
  report.refinements.responsiveness = true;
  report.refinements.ctaVisibility = report.annotatedCtas > 0;

  return {
    ...app,
    html: refinedHtml,
    css: refinedCss,
    report,
  };
}

function createEmptyReport() {
  return {
    annotatedCtas: 0,
    addedBodyScope: false,
    refinements: {
      spacing: false,
      typography: false,
      hierarchy: false,
      cards: false,
      responsiveness: false,
      ctaVisibility: false,
    },
  };
}

function refineHtml(html, report) {
  if (!html) {
    return html;
  }

  const withScopedBody = html.replace(BODY_OPEN_RE, (match, attributes) => {
    if (/\bdata-ui-refined=/.test(attributes)) {
      return match;
    }

    report.addedBodyScope = true;
    return `<body${attributes} data-ui-refined="true">`;
  });

  return withScopedBody.replace(CTA_TAG_RE, (match, tagName, attributes, content) => {
    if (/\bdata-ui-refined-cta=/.test(attributes)) {
      return match;
    }

    if (!isLikelyCta(attributes, content)) {
      return match;
    }

    report.annotatedCtas += 1;
    return `<${tagName}${attributes} data-ui-refined-cta="primary">${content}</${tagName}>`;
  });
}

function isLikelyCta(attributes, content) {
  const visibleText = stripTags(content).replace(/\s+/g, " ").trim();
  return CTA_CLASS_RE.test(attributes) || CTA_TEXT_RE.test(visibleText);
}

function stripTags(value) {
  return value.replace(/<[^>]+>/g, " ");
}

function mergeCss(existingCss, refinementCss) {
  const trimmed = existingCss.trim();

  if (!trimmed) {
    return refinementCss;
  }

  if (trimmed.includes("ui-refinement-engine")) {
    return existingCss;
  }

  return `${existingCss.replace(/\s*$/, "")}\n\n${refinementCss}`;
}

function buildRefinementStyles(options) {
  const {
    scopeSelector,
    brandColor,
    accentColor,
    textColor,
    mutedTextColor,
    surfaceColor,
    pageBackground,
    fontFamily,
    minimumTouchTarget,
    includeReset,
  } = options;

  const reset = includeReset
    ? `
${scopeSelector} *,
${scopeSelector} *::before,
${scopeSelector} *::after {
  box-sizing: border-box;
}`
    : "";

  return `/* ui-refinement-engine */
@layer ui-refinement {
${scopeSelector} {
  --ui-refine-brand: ${brandColor};
  --ui-refine-accent: ${accentColor};
  --ui-refine-text: ${textColor};
  --ui-refine-muted: ${mutedTextColor};
  --ui-refine-surface: ${surfaceColor};
  --ui-refine-page: ${pageBackground};
  --ui-refine-radius: 1.25rem;
  --ui-refine-shadow: 0 20px 45px rgb(15 23 42 / 0.10);
  --ui-refine-shadow-soft: 0 10px 30px rgb(15 23 42 / 0.08);
  color: var(--ui-refine-text);
  background:
    radial-gradient(circle at top left, color-mix(in srgb, var(--ui-refine-brand) 12%, transparent), transparent 26rem),
    var(--ui-refine-page);
  font-family: ${fontFamily};
  font-size: clamp(1rem, 0.96rem + 0.2vw, 1.125rem);
  line-height: 1.65;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}
${reset}

${scopeSelector} body {
  margin: 0;
  min-width: 320px;
}

${scopeSelector} main,
${scopeSelector} .app,
${scopeSelector} .page,
${scopeSelector} [data-app-root] {
  width: min(100% - clamp(2rem, 5vw, 5rem), 72rem);
  margin-inline: auto;
}

${scopeSelector} section,
${scopeSelector} header,
${scopeSelector} footer {
  padding-block: clamp(3rem, 7vw, 6.5rem);
}

${scopeSelector} :where(h1, h2, h3) {
  max-width: 13ch;
  margin: 0 0 0.65em;
  color: var(--ui-refine-text);
  font-weight: 750;
  letter-spacing: -0.045em;
  line-height: 0.98;
}

${scopeSelector} h1 {
  font-size: clamp(2.75rem, 8vw, 6.5rem);
}

${scopeSelector} h2 {
  font-size: clamp(2rem, 5vw, 4rem);
}

${scopeSelector} h3 {
  font-size: clamp(1.35rem, 3vw, 2rem);
  letter-spacing: -0.03em;
}

${scopeSelector} :where(p, li) {
  color: var(--ui-refine-muted);
}

${scopeSelector} :where(p) {
  max-width: 68ch;
  margin-block: 0 1.25rem;
}

${scopeSelector} :where(img, video, svg) {
  max-width: 100%;
  height: auto;
}

${scopeSelector} :where(.grid, .cards, .features, [data-grid]) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr));
  gap: clamp(1rem, 2.5vw, 2rem);
  align-items: stretch;
}

${scopeSelector} :where(.card, article, [data-card]) {
  border: 1px solid rgb(148 163 184 / 0.22);
  border-radius: var(--ui-refine-radius);
  background:
    linear-gradient(180deg, rgb(255 255 255 / 0.92), rgb(255 255 255 / 0.76)),
    var(--ui-refine-surface);
  box-shadow: var(--ui-refine-shadow-soft);
  padding: clamp(1.25rem, 3vw, 2rem);
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease,
    transform 180ms ease;
}

${scopeSelector} :where(.card, article, [data-card]):hover {
  border-color: color-mix(in srgb, var(--ui-refine-brand) 35%, rgb(148 163 184));
  box-shadow: var(--ui-refine-shadow);
  transform: translateY(-0.125rem);
}

${scopeSelector} :where(a, button, input, select, textarea) {
  font: inherit;
}

${scopeSelector} :where(button, .button, .btn, [role="button"], [data-ui-refined-cta]) {
  min-height: ${minimumTouchTarget};
  border-radius: 999px;
}

${scopeSelector} :where([data-ui-refined-cta="primary"]) {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.85rem 1.25rem;
  border: 0;
  background:
    linear-gradient(135deg, var(--ui-refine-brand), var(--ui-refine-accent));
  color: #fff;
  box-shadow: 0 14px 30px color-mix(in srgb, var(--ui-refine-brand) 28%, transparent);
  font-weight: 750;
  line-height: 1;
  text-decoration: none;
}

${scopeSelector} :where([data-ui-refined-cta="primary"]):is(:hover, :focus-visible) {
  filter: brightness(1.04);
  outline: 3px solid color-mix(in srgb, var(--ui-refine-brand) 26%, transparent);
  outline-offset: 3px;
}

@media (max-width: 720px) {
  ${scopeSelector} main,
  ${scopeSelector} .app,
  ${scopeSelector} .page,
  ${scopeSelector} [data-app-root] {
    width: min(100% - 1.25rem, 72rem);
  }

  ${scopeSelector} section,
  ${scopeSelector} header,
  ${scopeSelector} footer {
    padding-block: clamp(2rem, 12vw, 4rem);
  }

  ${scopeSelector} :where(nav, .nav, .navbar, .actions, .button-row) {
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  ${scopeSelector} :where([data-ui-refined-cta="primary"]) {
    width: 100%;
  }
}
}`;
}
