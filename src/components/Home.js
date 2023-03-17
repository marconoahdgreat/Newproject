import { Divider, Button, Space } from "antd";
import React from "react";
import "../Apps.css";
import logoshirt from "../Images/tshirt.jpeg";
import Products from "../Products/Products";
import Carousels from "../Products/Carousels";
import { Link } from "react-router-dom";

import { SwapRightOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Footer } from "antd/es/layout/layout";

function Home() {
  return (
    <div>
      <div className="Herocontainer">
        <div>
          <img className="HeroImg" src={logoshirt} alt="tshirt" />
        </div>

        <div className="HeroTitle">
          <h1>MARI</h1>
          <h1 style={{ color: "rgb(2,182,144)" }}>TEES</h1>
        </div>
        <div className="moon">
          <p style={{ color: "rgb(2,182,144)" }}>Fly me to t</p>
          <p>he mooon!</p>
        </div>
        <div className="moon2">
          <Link to="/about">
            {" "}
            <Button
              style={{
                borderRadius: "1px",
                borderBottomStyle: "doubled",
                color: "white",
                backgroundColor: "rgb(2,182,144)",
              }}
            >
              Shop Now <SwapRightOutlined />
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <Carousels />
      </div>
      <Divider />

      <div className="homecontainer2">
        <div>
          <h4>
            Featured Products{" "}
            <Link to="/about">
              <Button
                style={{
                  backgroundColor: "rgb(2,182,144)",
                  color: "black",
                }}
              >
                VIEW MORE <ArrowRightOutlined />
              </Button>
            </Link>
          </h4>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Products />
      </div>
      <Footer>FOOTER HERE!</Footer>
    </div>
  );
}

export default Home;
