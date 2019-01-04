import React from "react";
import QuestionBox from "./QuestionBox";

function Form1(props) {
  return (
    <div>
      <QuestionBox
        handleClick={props.handleClick}
        id1="Q1"
        id2="Q2"
        id3="Q3"
        id4="Q4"
        question="what color do you like?"
        option1="red"
        option2="green"
        option3="black"
        option4="white"
      />
    </div>
  );
}

export default Form1;
