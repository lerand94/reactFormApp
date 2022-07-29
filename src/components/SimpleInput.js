import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueTouched, setEnteredValueTouched] = useState(false);

  const enteredValueIsValid = enteredValue.trim() !== "";

  const enteredValueIsInvalid = !enteredValueIsValid && enteredValueTouched;

  const enteredValueHandler = (e) => {
    setEnteredValue(e.target.value);
  };
  const enteredValueBlurHandler = () => {
    setEnteredValueTouched(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setEnteredValueTouched(true);

    if (!enteredValueIsInvalid) {
      return;
    }

    console.log(enteredValue);

    setEnteredValue("");
    setEnteredValueTouched(false);
  };

  const nameInputClasses = enteredValueIsInvalid
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={enteredValueHandler}
          onBlur={enteredValueBlurHandler}
        />
        {enteredValueIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
