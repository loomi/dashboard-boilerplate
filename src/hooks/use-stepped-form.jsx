import { useState, useMemo } from 'react';

const useSteppedForm = (components = [], startPage = 0) => {
  const [stepIndex, setStepIndex] = useState(startPage);

  const stepComponent = useMemo(() => components[stepIndex], [
    components,
    stepIndex,
  ]);

  const values = useMemo(
    () => ({
      step: stepIndex + 1,
      steps: components.length,
      hasPreviousStep: stepIndex > 0,
      hasNextStep: stepIndex < components.length - 1,
    }),
    [components, stepIndex],
  );

  const next = () =>
    setStepIndex(Math.min(components.length - 1, stepIndex + 1));
  const previous = () => setStepIndex(Math.max(0, stepIndex - 1));

  return [stepComponent, { ...values, next, previous }];
};

export default useSteppedForm;
