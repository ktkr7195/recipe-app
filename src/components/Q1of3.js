import React from "react";
import UrlGetForm from "./UrlGetForm";

function Q1of3(props) {
  return (
    <div>
      <UrlGetForm
        handleClick={props.handleClick}
        getUrl={props.getUrl}
        urlId1="15"
        urlId2="16"
        question="パスタおいしいよね"
        option1="パスタ"
        option2="麺、粉物料理"
      />
    </div>
  );
}

export default Q1of3;
