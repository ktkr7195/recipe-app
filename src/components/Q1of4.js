import React from "react";
import QuestionBox from "./QuestionBox";

function Q1of4(props) {
  return (
    <div>
      <QuestionBox
        handleClick={props.handleClick}
        id1="Q5"
        id2="Q6"
        id3="Q7"
        id4="Q8"
        question="q1-4"
        option1="肉"
        option2="魚"
        option3="麺類"
        option4="その他"
      />
    </div>
  );
}

export default Q1of4;
