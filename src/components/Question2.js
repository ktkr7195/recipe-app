import React from "react";
import QuestionBox from "./QuestionBox";

function Question2(props) {
  return (
    <div>
      <QuestionBox
        handleClick={props.handleClick}
        getUrl={props.getUrl}
        id1="Q9"
        id2="Q10"
        id3="Q11"
        id4="Q12"
        question="何つくろっか？"
        option1="アジア料理"
        option2="西洋料理"
        option3="日本料理"
        option4="その他"
      />
    </div>
  );
}

export default Question2;
