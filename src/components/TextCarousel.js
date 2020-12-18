import React, { Component } from "react";
import "../styles/style.css";

import CarouselText from "../constants/Carousel";

// TODO: Fade out old text, wait, fade in new text
// TODO: Cascade
// TODO: Do not render immediately. We need to wait until the title is finished animating
const INTERVAL = 5000;
export default class TextCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: 0, points: this.constructPoints(0) };
  }

  componentDidMount = () => {
    this.counter = setInterval(this.timer, INTERVAL);
  };

  componentWillUnmount = () => {
    clearInterval(this.counter);
  };

  timer = () => {
    const idx = this.state.selectedIndex;
    const maxIdx = this.state.points.length - 1;
    const newIdx = idx === maxIdx ? 0 : idx + 1;
    this.setState({
      selectedIndex: newIdx,
      points: this.constructPoints(newIdx),
    });
  };

  constructPoints = (selectedIdx) => {
    const points = CarouselText.map((element, i) => {
      const show = selectedIdx === i ? "active-text" : "";
      const listItems = element.map((e) => {
        return (
          <li key={e} className={show}>
            {e}
          </li>
        );
      });
      return <ul key={String(i)}>{listItems}</ul>;
    });
    return points;
  };

  render() {
    return <div className="text-carousel">{this.state.points}</div>;
  }
}
