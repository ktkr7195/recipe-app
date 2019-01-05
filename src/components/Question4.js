import React from "react";
import QuestionBox from "./QuestionBox";

function Question4(props) {
  return (
    <div>
      <QuestionBox
        handleClick1={props.handleClick}
        id="#1"
        question="option4 is clicked"
        option1="a"
        option2="b"
        option3="c"
        option4="d"
      />
    </div>
  );
}

export default Question4;
