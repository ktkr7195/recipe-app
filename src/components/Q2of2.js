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
        question="どこに行きたい？"
        option1="イタリア"
        option2="フランス"
        option3="西洋のどこか"
        option4="スペイン、中南米"
      />
    </div>
  );
}

export default Q2of2;
