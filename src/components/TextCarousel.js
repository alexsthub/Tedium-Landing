import React, { Component } from "react";
import "../styles/style.css";

import CarouselText from "../constants/Carousel";

// TODO: Fade out old text, wait, fade in new text
// TODO: Cascade
export default class TextCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: -1, points: this.constructPoints(0) };
  }

  componentDidUpdate = (prevProps) => {
    if (!prevProps.animFinished && this.props.animFinished) {
      this.timer();
      this.counter = setInterval(this.timer, this.props.interval);
    }
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
      const show =
        selectedIdx === i && this.props.animFinished ? "active-text" : "";
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
