import React from "react";
import "../Apps.css";

import aboutpic from "../Images/About-Us.jpg";
import aboutpic2 from "../Images/about2.jpg";
function About() {
  return (
    <div>
      <div>
        <img className="Aboutpic" src={aboutpic} alt="About" />
      </div>
    </div>
  );
}

export default About;
