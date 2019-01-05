import React, { Component } from "react";
import BaseQuestion from "./components/BaseQuestion";
import Question1 from "./components/Question1";
import Question２ from "./components/Question2";
import Question3 from "./components/Question3";
import Question4 from "./components/Question4";
import Q1of1 from "./components/Q1of1";
import Q1of2 from "./components/Q1of2";
import Q1of3 from "./components/Q1of3";
import Q1of4 from "./components/Q1of4";

import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "",
      recipeData: "",
      largeId: ""
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?format=json&applicationId=1080103655190289289"
      )
      .then(res => {
        this.setState({ recipeData: res.data.result.medium });
      });
  }

  handleClick = e => {
    const { name } = e.target;
    this.setState({ display: name });
  };

  getUrl = e => {
    const { name } = e.target;
    this.setState({ largeId: name });
  };

  render() {
    let display;
    if (this.state.display === "Q1") {
      display = <Question1 handleClick={this.handleClick} />;
    } else if (this.state.display === "Q2") {
      display = <Question２ handleClick={this.handleClick} />;
    } else if (this.state.display === "Q3") {
      display = <Question3 handleClick={this.handleClick} />;
    } else if (this.state.display === "Q4") {
      display = <Question4 handleClick={this.handleClick} />;
    } else if (this.state.display === "Q5") {
      display = <Q1of1 getUrl={this.getUrl} />;
    } else if (this.state.display === "Q6") {
      display = <Q1of2 handleClick={this.handleClick} />;
    } else if (this.state.display === "Q7") {
      display = <Q1of3 handleClick={this.handleClick} />;
    } else if (this.state.display === "Q8") {
      display = <Q1of4 handleClick={this.handleClick} />;
    } else {
      display = <BaseQuestion handleClick={this.handleClick} />;
    }

    let eachData;
    let listDatas;
    let mediumData;
    if (this.state.largeId) {
      mediumData = this.state.recipeData.filter(data => {
        return data.parentCategoryId === this.state.largeId;
      });

      eachData = mediumData.map(data => {
        return data;
      });

      listDatas = eachData.map(data => (
        <li>
          <a href={data.categoryUrl}> {data.categoryName}</a>
        </li>
      ));
    }

    return (
      <div>
        <header className="App-header">
          <h1>今日のレシピ</h1>
        </header>
        {display}
        {listDatas ? <ul>{listDatas}</ul> : <p>Hi!</p>}
      </div>
    );
  }
}

export default App;
