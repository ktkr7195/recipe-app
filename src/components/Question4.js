import React from "react";
import QuestionBox from "./QuestionBox";

function Question4(props) {
  return (
    <div>
      <QuestionBox
        handleClick={props.handleClick}
        getUrl={props.getUrl}
        id1="Q17"
        id2="Q18"
        id3="Q19"
        id4="Q20"
        question="どれがいい？"
        option1="液体と野菜"
        option2="果物"
        option3="金ない"
        option4="その他"
      />
    </div>
  );
}

export default Question4;
