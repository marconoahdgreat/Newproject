import React from "react";
import { Link } from "react-router-dom";
import { RocketOutlined, UserOutlined } from "@ant-design/icons";
import NavDrawer from "./NavDrawer";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="container">
      <div className="Title">
        <RocketOutlined style={{ color: "rgb(2,182,144)" }} />
        <h2>MARI</h2>
        <h2 style={{ color: "rgb(2,182,144)" }}>TEES</h2>
      </div>
      <div className="Navdiv">
        <Link className="NavLinks" to="/">
          HOME
        </Link>
        <Link className="NavLinks" to="/about">
          PRODUCTS
        </Link>
        <Link className="NavLinks" to="/contacts">
          CONTACTS
        </Link>
        <Link className="NavLinks" to="/blogs">
          BLOGS
        </Link>

        <Link className="NavLinks" to="/">
          <UserOutlined />
        </Link>
      </div>
      <div className="MobileView">
        <NavDrawer />
      </div>
    </div>
  );
}

export default Navbar;
