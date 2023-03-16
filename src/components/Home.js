import React from "react";
import "../Apps.css";
import logoshirt from "../Images/tshirt.jpeg";

function Home() {
  return (
    <div className="Herocontainer">
      <div>
        <img className="HeroImg" src={logoshirt} alt="tshirt" />
      </div>

      <div className="HeroTitle">
        <h1>MARI</h1>
        <h1 style={{ color: "gray" }}>TEES</h1>
      </div>
      <div className="moon">
        <p>Fly me to the mooon!</p>
      </div>
    </div>
  );
}

export default Home;
