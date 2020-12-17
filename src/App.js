import "./styles/style.css";

import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import NewsPage from "./components/NewsPage";

// https://ansatz.capital/?fbclid=IwAR2zUQZSJ4e_lyi1IqH622JKcGmAAuMxzz4IzGjuKduD7tgVpM6-ZE4Tzx8
// React text loop
// React reveal but somehow fade out as well
// TODO: Text carousel
// TODO: Between careers and contact, go to a NEWS page (/NEWS)
export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/news" component={NewsPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}
