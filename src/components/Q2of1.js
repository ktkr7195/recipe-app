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
        question="どこに行きたい？"
        option1="中国"
        option2="韓国"
      />
    </div>
  );
}

export default Q2of1;
