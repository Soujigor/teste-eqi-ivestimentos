import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueChangeHandler = event => {
      setEnteredValue(event.target.value)
  }

  const inputBlurHandler = event => {
      setIsTouched(true)
  }

  const reset = () => {
      setEnteredValue('')
      setIsTouched(false)
  }

  const valueIsValid = validateValue(enteredValue)
  const hasError = !valueIsValid && isTouched;
  return {
      value: enteredValue, isValid: valueIsValid, isTouched, hasError, valueChangeHandler, inputBlurHandler, reset
  };
};

export default useInput;
