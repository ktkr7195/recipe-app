import React from "react";
import UrlGetForm from "./UrlGetForm";

function Q2of2(props) {
  return (
    <div>
      <UrlGetForm
        handleClick={props.handleClick}
        getUrl={props.getUrl}
        urlId1="50"
        urlId2="49"
        urlId3="55"
        question="どれがいい？"
        option1="クリスマス料理"
        option2="おせち料理"
        option3="その他冬の料理"
      />
    </div>
  );
}

export default Q2of2;
