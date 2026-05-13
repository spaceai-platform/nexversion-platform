const previewModes = {
  product: {
    confidence: "92%",
    html: `
      <div class="preview-kicker">Product launch</div>
      <h3>Build faster with context-aware agents.</h3>
      <p>A premium AI workspace for orchestrating research, writing, design, and launch decisions.</p>
      <div class="preview-card-row">
        <span>Strategy</span>
        <span>Design</span>
        <span>Ship</span>
      </div>
    `,
  },
  brief: {
    confidence: "88%",
    html: `
      <div class="preview-kicker">Creative brief</div>
      <h3>Turn scattered inputs into a sharp product narrative.</h3>
      <p>NOVA gathers goals, evidence, constraints, and decisions into a living launch document.</p>
      <div class="preview-card-row">
        <span>Audience</span>
        <span>Promise</span>
        <span>Risks</span>
      </div>
    `,
  },
  metrics: {
    confidence: "95%",
    html: `
      <div class="preview-kicker">Workspace health</div>
      <h3>Every preview ships with signal, not guesswork.</h3>
      <p>Track confidence, viewport coverage, accessibility checks, and unanswered design questions.</p>
      <div class="preview-card-row">
        <span>92% clarity</span>
        <span>3 blockers</span>
        <span>Live sync</span>
      </div>
    `,
  },
};

const viewportLabels = {
  desktop: "1440 px",
  tablet: "834 px",
  mobile: "390 px",
};

const previewContent = document.querySelector("[data-preview-content]");
const previewStage = document.querySelector("[data-device-frame]");
const confidenceLabel = document.querySelector("[data-confidence]");
const viewportLabel = document.querySelector("[data-viewport-label]");
const modeButtons = document.querySelectorAll("[data-preview-mode]");
const deviceButtons = document.querySelectorAll("[data-device]");
const composer = document.querySelector(".composer");
const promptInput = document.querySelector("#prompt");

function setActiveButton(buttons, activeButton) {
  buttons.forEach((button) => {
    button.classList.toggle("active", button === activeButton);
  });
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const mode = previewModes[button.dataset.previewMode];

    if (!mode || !previewContent || !confidenceLabel) {
      return;
    }

    setActiveButton(modeButtons, button);
    previewContent.style.opacity = "0";

    window.setTimeout(() => {
      previewContent.innerHTML = mode.html;
      confidenceLabel.textContent = mode.confidence;
      previewContent.style.opacity = "1";
    }, 120);
  });
});

deviceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const device = button.dataset.device;

    if (!device || !previewStage || !viewportLabel) {
      return;
    }

    setActiveButton(deviceButtons, button);
    previewStage.dataset.deviceFrame = device;
    viewportLabel.textContent = viewportLabels[device];
  });
});

if (composer && promptInput) {
  composer.addEventListener("submit", (event) => {
    event.preventDefault();
    promptInput.value = "";
    promptInput.placeholder = "NOVA is drafting refinements for the active preview...";
  });
}
