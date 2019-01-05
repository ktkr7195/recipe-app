import React from "react";
import QuestionBox from "./QuestionBox";

function Question3(props) {
  return (
    <div>
      <QuestionBox
        handleClick={props.handleClick}
        getUrl={props.getUrl}
        id1="Q13"
        id2="Q14"
        id3="Q15"
        id4="Q16"
        question="今の季節は？"
        option1="春"
        option2="夏"
        option3="秋"
        option4="冬"
      />
    </div>
  );
}

export default Question3;
