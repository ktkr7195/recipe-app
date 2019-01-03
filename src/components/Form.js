import React, { Component } from "react";
import QuestionBox from "./QuestionBox";

class Form extends Component {
  state = {};
  render() {
    return (
      <div>
        <QuestionBox
          none="none"
          question="what color do you like?"
          option1="red"
          option2="green"
          option3="black"
          option4="white"
        />
        <QuestionBox
          question="aaaa"
          option1="a"
          option2="b"
          option3="c"
          option4="d"
        />
        {/* <QuestionBox
          question="bbbb"
          option1="a"
          option2="b"
          option3="c"
          option4="d"
        />
        <QuestionBox
          question="cccc"
          option1="a"
          option2="b"
          option3="c"
          option4="d"
        /> */}
      </div>
    );
  }
}

export default Form;
