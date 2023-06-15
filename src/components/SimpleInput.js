import { useEffect, useRef, useState } from "react";
import "../index.css";
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);
  const nameRef = useRef();
  const lastname = useRef();

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
    if(enteredName.trim()===''){
      setNameIsValid(false);
    }
  };

const blurHandler = e=>{
  setNameTouched(true);
  if(enteredName.trim()===''){
    setNameIsValid(false);
  }else{
    setNameTouched(false)
  }
}

useEffect(()=>{

},[])

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    setNameTouched(true);
    if (enteredName.trim() === "") {
      setNameIsValid(false);
      return;
    }
    setNameIsValid(true);
    const enteredValue = nameRef.current.value;
    console.log(enteredValue);
    setEnteredName("");
  };

  const nameInputIsInvalid = !nameIsValid && nameTouched;
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Name</label>
        <input
          onChange={nameInputChangeHandler}
          onBlur={blurHandler}
          id="name"
          type="text"
          placeholder="Steve"
          minLength={2}
          ref={nameRef}
          value={enteredName}
        ></input>
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
        <label htmlFor="lastname">lastName</label>
        <input
          id="lastname"
          type="text"
          minLength={2}
          placeholder="Mc Gregory"
          ref={lastname}
        ></input>
      </div>
      <button>SUBMIT</button>
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
