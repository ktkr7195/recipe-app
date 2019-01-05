import React from "react";
import UrlGetForm from "./UrlGetForm";

function Q2of2(props) {
  return (
    <div>
      <UrlGetForm
        handleClick={props.handleClick}
        getUrl={props.getUrl}
        urlId1="43"
        urlId2="44"
        urlId3="25"
        urlId4="46"
        question="お洒落なの作ってね"
        option1="イタリア料理"
        option2="フランス料理"
        option3="西洋料理"
        option4="エスニック料理、中南米"
      />
    </div>
  );
}

export default Q2of2;
