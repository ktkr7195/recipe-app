import React from "react";
import UrlGetForm from "./UrlGetForm";

function Q2of2(props) {
  return (
    <div>
      <UrlGetForm
        handleClick={props.handleClick}
        getUrl={props.getUrl}
        urlId1="34"
        question="果物って高いよね"
        option1="果物"
      />
    </div>
  );
}

export default Q2of2;
