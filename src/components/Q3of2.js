import React from "react";
import UrlGetForm from "./UrlGetForm";

function Q2of2(props) {
  return (
    <div>
      <UrlGetForm
        handleClick={props.handleClick}
        getUrl={props.getUrl}
        urlId1="53"
        question="夏のだぜえ！"
        option1="夏の料理"
      />
    </div>
  );
}

export default Q2of2;
