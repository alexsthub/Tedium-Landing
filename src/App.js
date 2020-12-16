import "./styles/style.css";

import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <p style={{ margin: 0 }}>Tedium</p>

        <div className="landing-image"></div>

        <div className="contact-container">
          <a
            href={
              "https://www.linkedin.com/company/tedium-capital/?fbclid=IwAR0cqMsKVQT8e8ZWyFQr9OFY6PzpCzmaHOGLLusBTh4fJzuJoN0lvpic5to"
            }
          >
            CAREERS
          </a>
          <a href={"hello@tedium.capital"}>CONTACT</a>
        </div>
      </div>
    );
  }
}
