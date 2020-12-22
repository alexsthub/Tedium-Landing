import React, { Component } from "react";
import { Link } from "react-router-dom";

import TextCarousel from "./TextCarousel";

const INTERVAL = 4500;
const PAUSE_INTERVAL = 1600;
export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = { animFinished: false };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ animFinished: true });
    }, 3000);
  };

  render() {
    return (
      <div className="landing-container">
        <div className="landing-image" />
        <div className="landing-content">
          <div className="header">
            <p className="title">Tedium Capital</p>
            <TextCarousel
              animFinished={this.state.animFinished}
              interval={INTERVAL}
              pauseInterval={PAUSE_INTERVAL}
            />
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
            <Link to="/news" style={{ textDecoration: "none" }}>
              NEWS
            </Link>
            <a href={"mailto:hello@tedium.capital"}>CONTACT</a>
          </div>
        </div>
      </div>
    );
  }
}
