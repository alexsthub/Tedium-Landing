import React, { Component } from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";
import { TimelineLite } from "gsap/all";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { inView: false };

    this.toggle = false;
    this.pending = false;

    this.navElements = [];
    this.menu = null;
    this.nav = null;
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);

    this.timeline = new TimelineLite({ paused: true });
    this.timeline.to(
      this.menu,
      0.1,
      {
        background: "#805ad5",
        borderRadius: "5em 0 0 5em",
        ease: "Power2.easeIn",
      },
      "-=.2"
    );
    this.timeline.to(
      this.nav,
      0.3,
      {
        clipPath: "ellipse(100% 100% at 50% 50%)",
        ease: "Power2.easeIn",
      },
      "-=.2"
    );
    this.timeline.staggerTo(
      this.navElements,
      0.3,
      {
        opacity: 1,
        transform: "translateX(0)",
        ease: "Power2.easeIn",
      },
      0.05,
      "-=.2"
    );

    this.handleScroll();
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleClick = () => {
    if (this.toggle) {
      this.timeline.reverse();
    } else {
      this.timeline.play();
    }

    this.toggle = !this.toggle;
  };

  handleScroll = () => {
    const headerRef = this.props.headerRef.current;
    if (headerRef) {
      const headerBottom = headerRef.offsetTop + headerRef.offsetHeight;
      const yPos = window.scrollY;

      if (yPos > headerBottom && !this.state.inView) {
        this.setState({ inView: true }, () => {
          this.toggle = true;
          this.timeline.play();
        });
      } else if (yPos < headerBottom && this.state.inView && !this.pending) {
        this.pending = true;
        this.toggle = false;
        this.timeline.reverse();
        setTimeout(() => {
          this.pending = false;
          if (yPos < headerBottom) {
            this.setState({ inView: false });
          }
        }, 400);
      }
    }
  };

  render() {
    const navElements = elements.map((ele, index) => {
      if (!ele.internalLink) {
        return (
          <li key={String(index)}>
            <a href={ele.href}>
              <img
                src={ele.src}
                alt={ele.alt}
                ref={(li) => (this.navElements[index] = li)}
              />
            </a>
          </li>
        );
      } else {
        return (
          <li key={String(index)}>
            <Link to={ele.href} style={{ textDecoration: "none" }}>
              <img
                src={ele.src}
                alt={ele.alt}
                ref={(li) => (this.navElements[index] = li)}
              />
            </Link>
          </li>
        );
      }
    });

    const className = `navbar${this.state.inView ? " navbar-active" : ""}`;
    return (
      <div className={className}>
        <img
          alt={"Menu"}
          ref={(menu) => (this.menu = menu)}
          className="menu"
          src="https://s.svgbox.net/hero-outline.svg?ic=menu-alt-1&fill=ccb258"
          onClick={this.handleClick}
        ></img>
        <nav ref={(nav) => (this.nav = nav)}>
          <ul>{navElements}</ul>
        </nav>
      </div>
    );
  }
}

const elements = [
  {
    href: "https://www.linkedin.com/company/tedium-capital/jobs/",
    src: "//s.svgbox.net/hero-outline.svg?fill=805ad5#briefcase",
    alt: "careers",
  },
  {
    href: "/news",
    src: "//s.svgbox.net/hero-outline.svg?fill=805ad5#newspaper",
    alt: "news",
    internalLink: true,
  },
  {
    href: "mailto:hello@tedium.capital",
    src: "//s.svgbox.net/hero-outline.svg?fill=805ad5#mail",
    alt: "contact",
  },
];
