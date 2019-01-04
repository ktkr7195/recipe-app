import React, { Component } from "react";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import "./App.css";
// import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ""
    };
  }

  // componentDidMount() {
  //   axios
  //     .get(
  //       "https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?format=json&applicationId=1080103655190289289"
  //     )
  //     .then(res => {
  //       console.log(res.data.result.large);
  //       console.log(res.data.result.medium);
  //       console.log(
  //         res.data.result.small.filter(data => {
  //           if (data.parentCategoryId === "70") {
  //             return data;
  //           }
  //         })
  //       );
  //     });
  // }

  handleClick = e => {
    const { name } = e.target;
    this.setState({ display: name });
    console.log("working");
    console.log(this.state);
  };

  render() {
    let display;
    if (this.state.display === "Q1") {
      display = <Form2 handleClick={this.handleClick} />;
    } else if (this.state.display === "Q2") {
      display = <Form3 handleClick={this.handleClick} />;
    } else {
      display = <Form1 handleClick={this.handleClick} />;
    }

    return (
      <div>
        <header className="App-header">
          <h1>今日のレシピ</h1>
        </header>
        {display}
      </div>
    );
  }
}

export default App;
