import { useState, useEffect } from "react";
import useInput from "../hooks/use-input";
import "../index.css";
const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid:nameIsValid,
    hasError: nameInputHasError,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    reset:resetNameInput
  } = useInput(value=>value.trim()!=='');

  const [formIsValid, setFormIsValid] = useState(false);


 

 
  useEffect(() => {
    if (nameIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [nameIsValid]);


  const formSubmissionHandler = (e) => {
    e.preventDefault();
    
    if (!nameIsValid) {
      return;
    }

    resetNameInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Name</label>
        <input
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          id="name"
          type="text"
          placeholder="Steve"
          minLength={2}
          value={enteredName}
        ></input>
        {nameInputHasError && (
          <p className="error-text">Name must not be empty</p>
        )}
        <label htmlFor="lastname">lastName</label>
        <input
          id="lastname"
          type="text"
          minLength={2}
          placeholder="Mc Gregory"
        ></input>
      </div>
      <button disabled={!formIsValid}>SUBMIT</button>
    </form>
  );
};

export default SimpleInput;

// const calculate = (e) => {
//   e.preventDefault();
//   const now = new Date();
//   const userDate = new Date(
//     yearInput.current.value,
//     monthInput.current.value - 1,
//     dayInput.current.value
//   );
//   let yyyy = now.getFullYear() - userDate.getFullYear();
//   let mm = now.getMonth() - userDate.getMonth();
//   let dd = now.getDate() - userDate.getDate();
//   if (dd < 0) {
//     dd = 31 - Math.abs(dd);
//     mm = mm - 1;
//   }

//   if (mm < 0) {
//     mm = 12 - Math.abs(mm);
//     yyyy = yyyy - 1;
//   }

//   console.log(yyyy);
// };

/* <select id="gender" className={classes.select}>
<option id="gender" disabled>
  Gender
</option>
<option id="gender" value="Unisex">
  Prefer not to say
</option>
<option id="gender">Male</option>
<option id="gender">Female</option>
</select>

<label htmlFor="email">Email</label>
<input
id="email"
pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
title="Invalid email address"
placeholder="example@example.com"
type="email"
ref={emailInput}
></input>
  <label htmlFor="age">
          Birth date
          <div onInput={calculate} className={classes.age}>
            <input
              placeholder="dd"
              min="1"
              max="31"
              type="number"
              id="birthday"
              ref={dayInput}
            ></input>
            <input
              placeholder="mm"
              min="1"
              max="12"
              id="birthmonth"
              type="number"
              ref={monthInput}
            ></input>
            <input
              placeholder="yyyy"
              min="1900"
              max="2010"
              id="birthyear"
              type="number"
              ref={yearInput}
            ></input>
          </div>{" "}
        </label> */
