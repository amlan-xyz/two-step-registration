import { FormEvent, useState } from "react";
import { useMultiStepForm } from "../../hooks/useMultiStepForm";
import { AddressForm } from "./AddressDetailsForm";
import { PersonalDetailsForm } from "./PersonalDetails";

type FormData = {
  name: string;
  age: string;
  sex: string;
  mobile: string;
  govtIdType: string;
  govtId: string;
  address: string;
  state: string;
  city: string;
  country: string;
  pincode: string;
};

const INITIAL_DATA: FormData = {
  name: "",
  age: "",
  sex: "",
  mobile: "",
  govtIdType: "",
  govtId: "",
  address: "",
  state: "",
  city: "",
  country: "",
  pincode: "",
};

export const RegistrationForm = () => {
  const [data, setData] = useState<FormData>(INITIAL_DATA);

  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const {
    step,
    steps,
    currentStepIdx,
    isFirstStep,
    isLastStep,
    previous,
    next,
  } = useMultiStepForm([
    <PersonalDetailsForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
  ]);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return next();
    alert(data.name);
  };
  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <p>
          {currentStepIdx + 1} / {steps.length}{" "}
        </p>
        <p>{step}</p>
        {!isFirstStep && (
          <button type="button" onClick={previous}>
            Back
          </button>
        )}
        <button type="submit">{isLastStep ? "Submit" : "Next"}</button>
      </form>
    </div>
  );
};
