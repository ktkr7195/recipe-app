import React from "react";
import UrlGetForm from "./UrlGetForm";

function Q1of4(props) {
  return (
    <div>
      <UrlGetForm
        handleClick={props.handleClick}
        getUrl={props.getUrl}
        urlId1="22"
        urlId2="21"
        question="むずいけどいい？"
        option1="パン"
        option2="お菓子"
      />
    </div>
  );
}

export default Q1of4;
