import React from "react";
import UrlGetForm from "./UrlGetForm";

function Q2of1(props) {
  return (
    <div>
      <UrlGetForm
        handleClick={props.handleClick}
        getUrl={props.getUrl}
        urlId1="41"
        urlId2="42"
        question="チャイナに行っちゃいな"
        option1="中華料理"
        option2="韓国料理"
      />
    </div>
  );
}

export default Q2of1;
