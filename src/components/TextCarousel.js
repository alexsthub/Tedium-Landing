import React, { Component } from "react";
import "../styles/style.css";

import CarouselText from "../constants/TextCarouselContent";

// TODO: Cascade
// TODO: On animate in, translate up | On out, translate down
// For each set of points, we need length, listItemIndex, ascending/descending
export default class TextCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      points: this.constructPoints(0, false),
    };
  }

  componentDidUpdate = (prevProps) => {
    if (!prevProps.animFinished && this.props.animFinished) {
      this.start();
    }
  };

  start = () => {
    this.setState(
      {
        points: this.constructPoints(this.state.selectedIndex, false),
      },
      () => {
        setTimeout(() => this.pause(), this.props.interval);
      }
    );
  };

  next = () => {
    const idx = this.state.selectedIndex;
    const maxIdx = this.state.points.length - 1;
    const newIdx = idx === maxIdx ? 0 : idx + 1;
    this.setState(
      {
        selectedIndex: newIdx,
        points: this.constructPoints(newIdx, false),
        pause: false,
      },
      () => {
        setTimeout(() => this.pause(), this.props.interval);
      }
    );
  };

  pause = () => {
    this.setState(
      {
        pause: true,
        points: this.constructPoints(this.state.selectedIndex, true),
      },
      () => {
        setTimeout(() => this.next(), this.props.pauseInterval);
      }
    );
  };

  constructPoints = (selectedIdx, pause) => {
    const points = CarouselText.map((element, i) => {
      const show =
        selectedIdx === i && this.props.animFinished && !pause
          ? "active-text"
          : "";
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
