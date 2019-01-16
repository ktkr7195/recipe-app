import React from "react";
import UrlGetForm from "./UrlGetForm";

function Q2of3(props) {
  return (
    <div>
      <UrlGetForm
        handleClick={props.handleClick}
        getUrl={props.getUrl}
        urlId1="47"
        urlId2="48"
        question="日本でどこが好き？"
        option1="沖縄"
        option2="その他の日本"
      />
    </div>
  );
}

export default Q2of3;
