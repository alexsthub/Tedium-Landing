import React, { Component } from "react";
import { Link } from "react-router-dom";

import TextCarousel from "./TextCarousel";
import NavBar from "./NavBar";

import { Carousel } from "react-responsive-carousel";

// TODO: Make a navbar animate in at the top once you move past the header
// TODO: Show 3 or 4 characteristics https://speedtrader.com/
const INTERVAL = 4500;
const PAUSE_INTERVAL = 1600;
export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = { animFinished: false };

    this.headerRef = React.createRef();
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ animFinished: true });
    }, 3000);
  };

  render() {
    return (
      <div>
        <NavBar headerRef={this.headerRef} />
        <div className="header-container" ref={this.headerRef}>
          <div className="header-image" />
          <div className="header-content">
            <div className="header">
              <p className="title">Tedium Capital</p>
              <TextCarousel
                animFinished={this.state.animFinished}
                interval={INTERVAL}
                pauseInterval={PAUSE_INTERVAL}
              />
            </div>

            <div className="contact-container">
              {/* <p>
              If you are considering a job at Tedium Capital, click here to view
              open positions or contact us at hello@tedium.capital to learn
              more.
            </p> */}
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

        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
          swipeable={true}
        >
          <div className="carousel-item">
            <img
              src="icon-backempty.png"
              className="carousel-logo"
              alt={"Tedium Logo"}
            />
            <h2>MAXIMIZE YOUR TRADING EDGE</h2>
            <p>
              In this business, you’re only as good as your data, technology and
              resources. Tedium is a small and growing company that is using the
              latest technology and ideas to be successful.
            </p>
          </div>
          <div className="carousel-item">Page 2</div>
          <div className="carousel-item">Page 3</div>
        </Carousel>

        <div className="test2"></div>
      </div>
    );
  }
}
