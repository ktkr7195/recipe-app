import React from "react";

function QuestionBox(props) {
  return (
    <div className={props.display}>
      <div className="questionBox">
        <label>
          <p>
            今日のレシピは簡単な質問に答えるだけで食べたいものがわかるアプリです
          </p>
        </label>
        <button onClick={props.handleClick} name="baseQuestion">
          スタート
        </button>
      </div>
    </div>
  );
}

export default QuestionBox;
