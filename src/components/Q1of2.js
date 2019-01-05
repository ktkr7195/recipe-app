import React from "react";
import UrlGetForm from "./UrlGetForm";

function Q1of2(props) {
  return (
    <div>
      <UrlGetForm
        handleClick={props.handleClick}
        getUrl={props.getUrl}
        urlId1="32"
        urlId2="11"
        question="やっぱり定番の魚料理？"
        option1="定番の魚料理"
        option2="その他魚料理"
      />
    </div>
  );
}

export default Q1of2;
