import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class NewsPage extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            color: "white",
            fontSize: "3rem",
            margin: 0,
          }}
        >
          News will come as we grow!
        </p>
        <Link
          style={{
            marginTop: 20,
            textDecoration: "none",
            fontSize: "2rem",
            color: "white",
            backgroundColor: "#4e779e",
            padding: 20,
          }}
          to="/"
        >
          Return Home
        </Link>
      </div>
    );
  }
}
