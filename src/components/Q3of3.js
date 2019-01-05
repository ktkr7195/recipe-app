import React from "react";
import UrlGetForm from "./UrlGetForm";

function Q2of2(props) {
  return (
    <div>
      <UrlGetForm
        handleClick={props.handleClick}
        getUrl={props.getUrl}
        urlId1="54"
        question="食欲の秋"
        option1="秋の料理"
      />
    </div>
  );
}

export default Q2of2;
