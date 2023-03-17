import React from "react";
import "../Apps.css";
import Products from "../Products/Products";

function About() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
      </div>
    </div>
  );
}

export default About;
