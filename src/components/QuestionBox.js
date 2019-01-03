import React, { Component } from "react";

function QuestionBox(props) {
  return (
    <div class="questionBox" className={props.none}>
      <label>Q, {props.question}</label>
      <label>
        <input type="radio" class="option-input radio" name="cpipr02" checked />
        {props.option1}
      </label>
      <label>
        <input type="radio" class="option-input radio" name="cpipr02" />
        {props.option2}
      </label>
      <label>
        <input type="radio" class="option-input radio" name="cpipr02" />
        {props.option3}
      </label>
      <label class="disabled">
        <input
          type="radio"
          class="option-input radio"
          name="cpipr02"
          disabled
        />
        {props.option4}
      </label>
    </div>
  );
}

export default QuestionBox;
