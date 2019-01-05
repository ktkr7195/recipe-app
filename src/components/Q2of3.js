import React from "react";
import UrlGetForm from "./UrlGetForm";

function Q2of3(props) {
  return (
    <div>
      <UrlGetForm
        handleClick={props.handleClick}
        getUrl={props.getUrl}
        urlId1="47"
        urlId2="48"
        question="日本の料理は最高ですな"
        option1="沖縄料理"
        option2="日本各地の郷土料理"
      />
    </div>
  );
}

export default Q2of3;
