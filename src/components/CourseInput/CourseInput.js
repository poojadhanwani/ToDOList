import React, { useState } from "react";
import "./CourseInput.css";
import Button from "../UI/Button/Button";

const CourseInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredGoal !== "") {
      props.onAddGoal(enteredGoal);
    }

    setEnteredGoal("");
  };

  const changeHandler = (event) => {
    setEnteredGoal(event.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label>Course Goals:</label>
        <input type="text" onChange={changeHandler} value={enteredGoal} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};
export default CourseInput;
