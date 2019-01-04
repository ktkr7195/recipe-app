import React from "react";
import QuestionBox from "./QuestionBox";

function Form2(props) {
  return (
    <div>
      <QuestionBox
        handleClick1={props.handleClick}
        id="#1"
        question="option1 is clicked"
        option1="a"
        option2="b"
        option3="c"
        option4="d"
      />
    </div>
  );
}

export default Form2;
