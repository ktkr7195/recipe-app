import React from "react";
import QuestionBox from "./QuestionBox";

function Question1(props) {
  return (
    <div>
      <QuestionBox
        handleClick={props.handleClick}
        getUrl={props.getUrl}
        id1="Q5"
        id2="Q6"
        id3="Q7"
        id4="Q8"
        question="何をたべたい？"
        option1="肉"
        option2="魚"
        option3="麺類"
        option4="その他"
      />
    </div>
  );
}

export default Question1;
