import React from "react";
import UrlGetForm from "./UrlGetForm";

function Q1of1(props) {
  return (
    <div>
      <UrlGetForm
        handleClick={props.handleClick}
        getUrl={props.getUrl}
        urlId1="31"
        urlId2="10"
        question="やっぱり定番の肉料理？"
        option1="定番の肉料理"
        option2="その他肉料理"
      />
    </div>
  );
}

export default Q1of1;
