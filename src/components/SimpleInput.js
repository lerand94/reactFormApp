import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const enteredRef = useRef();

  const enteredValueHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(enteredValue);

    console.log(enteredRef.current.value);

    setEnteredValue("");
    enteredRef.current.value = ""; // not IDEAL, react in perfect dont need to manipulate DOM
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={enteredRef}
          type="text"
          id="name"
          onChange={enteredValueHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
