import React from "react";
import UrlGetForm from "./UrlGetForm";

function Q1of4(props) {
  return (
    <div>
      <UrlGetForm
        handleClick={props.handleClick}
        getUrl={props.getUrl}
        urlId1="33"
        urlId2="14"
        urlId3="23"
        urlId4="35"
        question="何が食べたい？"
        option1="卵料理"
        option2="ご飯物"
        option3="鍋料理"
        option4="大豆、豆腐"
      />
    </div>
  );
}

export default Q1of4;
