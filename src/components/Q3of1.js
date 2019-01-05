import React from "react";
import UrlGetForm from "./UrlGetForm";

function Q2of2(props) {
  return (
    <div>
      <UrlGetForm
        handleClick={props.handleClick}
        getUrl={props.getUrl}
        urlId1="51"
        urlId2="52"
        question="春といえば。。"
        option1="ひな祭り"
        option2="その他の春の料理"
      />
    </div>
  );
}

export default Q2of2;
