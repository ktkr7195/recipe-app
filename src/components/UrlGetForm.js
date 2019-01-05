import React from "react";

function UrlGetForm(props) {
  return (
    <div className={props.display}>
      <div className="questionBox">
        <label>Q, {props.question}</label>
        <label>
          <input
            type="radio"
            className="option-input radio"
            name={props.urlId1}
            onClick={props.getUrl}
          />
          {props.option1}
        </label>
        <label>
          <input
            type="radio"
            className="option-input radio"
            name={props.urlId2}
            onClick={props.getUrl}
          />
          {props.option2}
        </label>
        <label>
          <input
            type="radio"
            className="option-input radio"
            name={props.urlId3}
            onClick={props.getUrl}
          />
          {props.option3}
        </label>
        <label className={props.disabled}>
          <input
            type="radio"
            className="option-input radio"
            name={props.urlId4}
            onClick={props.getUrl}
          />
          {props.option4}
        </label>
      </div>
    </div>
  );
}

export default UrlGetForm;
