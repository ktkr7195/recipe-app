import React, { Component } from "react";
import LandingPage from "./components/LandingPage";
import BaseQuestion from "./components/BaseQuestion";
import Question1 from "./components/Question1";
import Question2 from "./components/Question2";
import Question3 from "./components/Question3";
import Question4 from "./components/Question4";
import Q1of1 from "./components/Q1of1";
import Q1of2 from "./components/Q1of2";
import Q1of3 from "./components/Q1of3";
import Q1of4 from "./components/Q1of4";
import Q2of1 from "./components/Q2of1";
import Q2of2 from "./components/Q2of2";
import Q2of3 from "./components/Q2of3";
import Q2of4 from "./components/Q2of4";
import Q3of1 from "./components/Q3of1";
import Q3of2 from "./components/Q3of2";
import Q3of3 from "./components/Q3of3";
import Q3of4 from "./components/Q3of4";
import Q4of1 from "./components/Q4of1";
import Q4of2 from "./components/Q4of2";
import Q4of3 from "./components/Q4of3";
import Q4of4 from "./components/Q4of4";

import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "landingPage",
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
    if (this.state.display === "landingPage") {
      display = <LandingPage handleClick={this.handleClick} />;
    } else if (this.state.display === "Q1") {
      display = <Question1 handleClick={this.handleClick} />;
    } else if (this.state.display === "Q2") {
      display = <Question2 handleClick={this.handleClick} />;
    } else if (this.state.display === "Q3") {
      display = <Question3 handleClick={this.handleClick} />;
    } else if (this.state.display === "Q4") {
      display = <Question4 handleClick={this.handleClick} />;
    } else if (this.state.display === "Q5") {
      display = <Q1of1 getUrl={this.getUrl} />;
    } else if (this.state.display === "Q6") {
      display = <Q1of2 getUrl={this.getUrl} />;
    } else if (this.state.display === "Q7") {
      display = <Q1of3 getUrl={this.getUrl} />;
    } else if (this.state.display === "Q8") {
      display = <Q1of4 getUrl={this.getUrl} />;
    } else if (this.state.display === "Q9") {
      display = <Q2of1 getUrl={this.getUrl} />;
    } else if (this.state.display === "Q10") {
      display = <Q2of2 getUrl={this.getUrl} />;
    } else if (this.state.display === "Q11") {
      display = <Q2of3 getUrl={this.getUrl} />;
    } else if (this.state.display === "Q12") {
      display = <Q2of4 getUrl={this.getUrl} />;
    } else if (this.state.display === "Q13") {
      display = <Q3of1 getUrl={this.getUrl} />;
    } else if (this.state.display === "Q14") {
      display = <Q3of2 getUrl={this.getUrl} />;
    } else if (this.state.display === "Q15") {
      display = <Q3of3 getUrl={this.getUrl} />;
    } else if (this.state.display === "Q16") {
      display = <Q3of4 getUrl={this.getUrl} />;
    } else if (this.state.display === "Q17") {
      display = <Q4of1 getUrl={this.getUrl} />;
    } else if (this.state.display === "Q18") {
      display = <Q4of2 getUrl={this.getUrl} />;
    } else if (this.state.display === "Q19") {
      display = <Q4of3 getUrl={this.getUrl} />;
    } else if (this.state.display === "Q20") {
      display = <Q4of4 getUrl={this.getUrl} />;
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
        <li key={data.categoryId}>
          <a href={data.categoryUrl}> {data.categoryName}</a>
        </li>
      ));
    }

    return (
      <div>
        <header className="App-header">
          <h1>今日のレシピ</h1>
        </header>

        {listDatas ? (
          <ul className="questionBox">
            {" "}
            <h2>こんなのが食べたかった？</h2>
            {listDatas}
          </ul>
        ) : (
          display
        )}
      </div>
    );
  }
}

export default App;
