import React, { Component } from "react";
import Form from "./components/Form";
import "./App.css";
import axios from "axios";

class App extends Component {
  render() {
    axios
      .get(
        "https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?format=json&applicationId=1080103655190289289"
      )
      .then(res => {
        console.log(res.data.result.large);
        console.log(res.data.result.medium);
        console.log(
          res.data.result.small.filter(data => {
            if (data.parentCategoryId === "70") {
              return data;
            }
          })
        );
      });

    return (
      <div>
        <header class="App-header">
          <h1>今日のレシピ</h1>
        </header>
        <Form />
      </div>
    );
  }
}

export default App;
