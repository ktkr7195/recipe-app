import React from "react";
import QuestionBox from "./QuestionBox";

function BaseQuestion(props) {
  return (
    <div>
      <QuestionBox
        handleClick={props.handleClick}
        id1="Q1"
        id2="Q2"
        id3="Q3"
        id4="Q4"
        question="今日の気分は？"
        option1="めんどくせぇし腹減った"
        option2="料理がんばりたいなり"
        option3="パーティーYeah!"
        option4="なんだろう、よくわかんない"
        //if you need to diable some question
        // disabled="disabled"
      />
    </div>
  );
}

export default BaseQuestion;
