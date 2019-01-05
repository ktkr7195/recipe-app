import React from "react";
import UrlGetForm from "./UrlGetForm";

function Q2of2(props) {
  return (
    <div>
      <UrlGetForm
        handleClick={props.handleClick}
        getUrl={props.getUrl}
        urlId1="17"
        urlId2="18"
        urlId3="12"
        urlId4="27"
        question="おいしいとおもうよ"
        option1="汁物、スープ"
        option2="サラダ"
        option3="野菜"
        option4="飲み物"
      />
    </div>
  );
}

export default Q2of2;
