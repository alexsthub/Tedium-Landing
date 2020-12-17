import "./styles/style.css";

import React, { Component } from "react";

// https://ansatz.capital/?fbclid=IwAR2zUQZSJ4e_lyi1IqH622JKcGmAAuMxzz4IzGjuKduD7tgVpM6-ZE4Tzx8

// React text loop
// React reveal but somehow fade out as well

// TODO: Text carousel
// TODO: Between careers and contact, go to a NEWS page (/NEWS)
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="landing-image" />
        <div className="app-content">
          <div className="header">
            <p className="title">Tedium Capital</p>
            <p className="description">is a quantitative trading firm</p>
            <p className="description2">based in downtown Seattle.</p>
          </div>

          <div className="contact-container">
            <p>
              If you are considering a job at Tedium Capital, click here to view
              open positions or contact us at hello@tedium.capital to learn
              more.
            </p>
            <a href={"https://www.linkedin.com/company/tedium-capital/jobs/"}>
              CAREERS
            </a>
            <a href={"mailto:hello@tedium.capital"}>CONTACT</a>
          </div>
        </div>
      </div>
    );
  }
}
