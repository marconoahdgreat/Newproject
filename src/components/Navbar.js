import React from "react";
import { Link } from "react-router-dom";
import { RocketOutlined } from "@ant-design/icons";
import NavDrawer from "./NavDrawer";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="container">
      <div className="Title">
        <RocketOutlined />
        <h2>MARI</h2>
        <h2 style={{ color: "gray" }}>TEES</h2>
      </div>
      <div className="Navdiv">
        <Link className="NavLinks" to="/">
          HOME
        </Link>
        <Link className="NavLinks" to="/about">
          ABOUTUS
        </Link>
        <Link className="NavLinks" to="/contacts">
          CONTACT
        </Link>
        <Link className="NavLinks" to="/blogs">
          BLOGS
        </Link>
      </div>
      <div className="MobileView">
        <NavDrawer />
      </div>
    </div>
  );
}

export default Navbar;
