import { workspaceSteps } from "@/features/ai-workspace/data/workspace-content";
import type { WorkspaceStep } from "@/types/platform";

export type WorkspaceStatus = WorkspaceStep["status"];

export type WorkspaceState = {
  steps: WorkspaceStep[];
  selectedStep: string;
};

export type WorkspaceAction =
  | { type: "select-step"; label: string }
  | { type: "set-step-status"; label: string; status: WorkspaceStatus }
  | { type: "reset" };

export const initialWorkspaceState: WorkspaceState = {
  steps: workspaceSteps,
  selectedStep:
    workspaceSteps.find((step) => step.status === "active")?.label ??
    workspaceSteps[0]?.label ??
    "",
};

export function workspaceReducer(
  state: WorkspaceState,
  action: WorkspaceAction,
): WorkspaceState {
  switch (action.type) {
    case "select-step":
      return { ...state, selectedStep: action.label };
    case "set-step-status":
      return {
        ...state,
        steps: state.steps.map((step) =>
          step.label === action.label ? { ...step, status: action.status } : step,
        ),
      };
    case "reset":
      return initialWorkspaceState;
    default:
      return state;
  }
}

export function selectActiveStep(state: WorkspaceState) {
  return (
    state.steps.find((step) => step.label === state.selectedStep) ??
    state.steps.find((step) => step.status === "active") ??
    state.steps[0]
  );
}
