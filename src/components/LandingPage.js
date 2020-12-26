import React, { Component } from "react";
import { Link } from "react-router-dom";

import TextCarousel from "./TextCarousel";
import NavBar from "./NavBar";

import { Carousel } from "react-responsive-carousel";

// TODO: Let the navbar menu have a background so it doesn't get caught in the white background
const INTERVAL = 4500;
const PAUSE_INTERVAL = 1000;
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

        <div className="attributes">
          <div className="attribute-content">
            <div className="attribute">
              <img
                src={"https://s.svgbox.net/materialui.svg?ic=money_off"}
                alt={"Low costs"}
              />
              <h3>LOW COST TRADES</h3>
              <p>
                Tedium Capital offers low commissions and financing rates in
                order to maximize your returns.
              </p>
            </div>
            <div className="attribute">
              <img
                src={"https://s.svgbox.net/hero-outline.svg?ic=globe"}
                alt={"Globe"}
              />
              <h3>WIDE ACCESS</h3>
              <p>
                Tedium Capital offers investments in stocks, options, and bonds.{" "}
              </p>
            </div>
            <div className="attribute">
              <img
                src={"https://s.svgbox.net/materialui.svg?ic=computer"}
                alt={"Computer"}
              />
              <h3>POWERFUL TECHNOLOGY</h3>
              <p>
                Tedium Capital's technology helps optimize trading speed and
                efficiency.{" "}
              </p>
            </div>
          </div>
        </div>

        <footer className="footer">
          <p>Tedium Capital © 2020</p>
        </footer>
      </div>
    );
  }
}
