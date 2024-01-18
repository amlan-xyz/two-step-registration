import { ReactElement, useState } from "react";

export const useMultiStepForm = (steps: ReactElement[]) => {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  function next() {
    setCurrentStepIdx((idx) => {
      if (idx >= steps.length - 1) return idx;
      return idx + 1;
    });
  }

  function previous() {
    setCurrentStepIdx((idx) => {
      if (idx <= 0) return idx;
      return idx - 1;
    });
  }

  return {
    currentStepIdx,
    step: steps[currentStepIdx],
    next,
    previous,
    steps,
    isFirstStep: currentStepIdx === 0,
    isLastStep: currentStepIdx === steps.length - 1,
  };
};
