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
        question="好きなキャラクターは誰？"
        option1="キン肉マン"
        option2="ロビンマスク"
        option3="ラーメンマン"
        option4="その他のキャラクター"
      />
    </div>
  );
}

export default Question1;
