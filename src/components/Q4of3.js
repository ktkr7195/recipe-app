import React from "react";
import UrlGetForm from "./UrlGetForm";

function Q2of2(props) {
  return (
    <div>
      <UrlGetForm
        handleClick={props.handleClick}
        getUrl={props.getUrl}
        urlId1="37"
        urlId2="20"
        question="私も貧乏なの"
        option1="節約料理"
        option2="お弁当"
      />
    </div>
  );
}

export default Q2of2;
