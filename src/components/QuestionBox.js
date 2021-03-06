import React from "react";

function QuestionBox(props) {
  return (
    <div className={props.display}>
      <div className="questionBox">
        <label>Q, {props.question}</label>
        <label>
          <input
            type="radio"
            className="option-input radio"
            id={props.urlId1}
            name={props.id1}
            onClick={props.handleClick}
          />
          {props.option1}
        </label>
        <label>
          <input
            type="radio"
            className="option-input radio"
            id={props.urlId2}
            name={props.id2}
            onClick={props.handleClick}
          />
          {props.option2}
        </label>
        <label>
          <input
            type="radio"
            className="option-input radio"
            id={props.urlId3}
            name={props.id3}
            onClick={props.handleClick}
          />
          {props.option3}
        </label>
        <label className={props.disabled}>
          <input
            type="radio"
            className="option-input radio"
            id={props.urlId1}
            name={props.id4}
            onClick={props.handleClick}
          />
          {props.option4}
        </label>
      </div>
    </div>
  );
}

export default QuestionBox;
