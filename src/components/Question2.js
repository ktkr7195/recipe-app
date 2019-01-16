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
        question="どこに行きたい？"
        option1="アジア"
        option2="欧米"
        option3="日本"
        option4="家にいたい"
      />
    </div>
  );
}

export default Question2;
