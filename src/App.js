import "./styles/style.css";

import React, { Component } from "react";

// https://ansatz.capital/?fbclid=IwAR2zUQZSJ4e_lyi1IqH622JKcGmAAuMxzz4IzGjuKduD7tgVpM6-ZE4Tzx8

// React text loop
// React reveal but somehow fade out as well
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="landing-image" />
        <div className="app-content">
          <div className="header">Tedium Capital</div>

          <div className="contact-container">
            <p>
              If you are considering a job at Tedium Capital, click here to view
              open positions or contact us to learn more.
            </p>
            <a
              href={
                "https://www.linkedin.com/company/tedium-capital/?fbclid=IwAR0cqMsKVQT8e8ZWyFQr9OFY6PzpCzmaHOGLLusBTh4fJzuJoN0lvpic5to"
              }
            >
              CAREERS
            </a>
            <a href={"hello@tedium.capital"}>CONTACT</a>
          </div>

          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            preserveAspectRatio="xMaxYMax meet"
          >
            <g className="img">
              <path
                d="M11.811,19.136c-0.221-1.871-1.037-8.879-1.037-10.726c0-1.92,0.633-4.083,0.762-4.557h0.158c0,0,0.387,0,0.568-0.064
		c0.102-0.037,0.254-0.127,0.369-0.2h0.402l0.202-0.419h0.15V2.941h-0.436V2.837h0.002c0,0-0.396-0.212-0.924-0.333
		c-0.529-0.124-1.011-0.243-1.011-0.243s-0.152-0.107-0.044-0.168c0.108-0.06,0.243-0.136,0.243-0.196c0-0.062,0-0.091,0-0.091
		h-0.17c-0.033-0.073-0.103-0.187-0.26-0.296c-0.17-0.12-0.42-0.192-0.569-0.224V0H9.993v1.287C9.843,1.318,9.591,1.39,9.423,1.51
		C9.266,1.619,9.195,1.733,9.161,1.805H8.993c0,0,0,0.029,0,0.091c0,0.061,0.134,0.137,0.243,0.196
		c0.11,0.062-0.043,0.169-0.043,0.169S8.709,2.38,8.183,2.503C7.655,2.625,7.258,2.837,7.258,2.837v0.104H6.824V3.17h0.245
		l0.197,0.419h0.312c0.115,0.072,0.269,0.163,0.369,0.199C8.13,3.854,8.513,3.854,8.513,3.854h0.119
		c0.117,0.604,0.65,3.533,0.473,5.786c-0.091,1.16-1.044,7.777-1.295,9.496H6.553v0.802h6.454v-0.802H11.811z M7.69,3.325V3.092
		h4.912v0.233H7.69z M8.718,19.136c0.183-1.613,0.842-7.547,0.924-9.771c0.086-2.268-0.381-4.902-0.496-5.511h0.495
		c0.023,0.479,0.102,1.904,0.181,3.042C9.906,8.118,10.246,17,10.33,19.137L8.718,19.136L8.718,19.136z M10.393,6.469
		c-0.229,0-0.296-2.053-0.309-2.615h0.899C10.948,4.182,10.69,6.472,10.393,6.469z"
              />
            </g>
          </svg> */}
        </div>
      </div>
    );
  }
}
