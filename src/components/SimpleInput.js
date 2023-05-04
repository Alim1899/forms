import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameIsInvalid = !enteredNameIsValid && nameTouched;

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const nameInputBlurHandler = (e) => {
    setNameTouched(true);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    setNameTouched(true);

    if (!enteredNameIsValid) return;

    console.log(enteredName);
    setEnteredName("");
    setNameTouched(false);
  };

  const nameInputClasses = nameIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          type="text"
          id="name"
          value={enteredName}
        />
        {nameIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
