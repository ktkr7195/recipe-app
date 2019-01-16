import React from "react";
import UrlGetForm from "./UrlGetForm";

function Q2of2(props) {
  return (
    <div>
      <UrlGetForm
        handleClick={props.handleClick}
        getUrl={props.getUrl}
        urlId1="19"
        urlId2="39"
        urlId3="13"
        urlId4="26"
        question="どれがいい？"
        option1="ソース、調味料、ドレッシング"
        option2="健康料理"
        option3="その他の食材"
        option4="パロプンテ"
      />
    </div>
  );
}

export default Q2of2;
