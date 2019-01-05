import React from "react";
import QuestionBox from "./QuestionBox";

function Question２(props) {
  return (
    <div>
      <QuestionBox
        handleClick={props.handleClick}
        id="#2"
        question="option2 is clicked"
        option1="a"
        option2="b"
        option3="c"
        option4="d"
      />
    </div>
  );
}

export default Question２;
