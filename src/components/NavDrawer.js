import { Button, Divider, Drawer } from "antd";
import { useState } from "react";
import { Menu } from "antd";
import HomeOutlined from "@ant-design/icons/lib/icons/HomeOutlined";
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
import PhoneOutlined from "@ant-design/icons/lib/icons/PhoneOutlined";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { MenuOutlined, RocketOutlined } from "@ant-design/icons";

const App = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={showDrawer}
        style={{ backgroundColor: "rgb(2,182,144)" }}
      >
        <MenuOutlined />
      </Button>
      <Drawer placement="right" onClose={onClose} open={open}>
        <div className="Navdiv2">
          <div>
            <h2
              style={{
                color: "rgb(2,182,144)",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <RocketOutlined />
              MARITEES
            </h2>
          </div>

          <div className="Navdiv2">
            <Divider />
            <Link
              className="NavLinks"
              to="/"
              onClick={() => {
                setOpen(false);
              }}
            >
              HOME
            </Link>
            <Divider />
            <Link
              className="NavLinks"
              to="/about"
              onClick={() => {
                setOpen(false);
              }}
            >
              PRODUCTS
            </Link>
            <Divider />
            <Link
              className="NavLinks"
              to="/contacts"
              onClick={() => {
                setOpen(false);
              }}
            >
              CONTACTS
            </Link>
            <Divider />
            <Link
              className="NavLinks"
              to="/blogs"
              onClick={() => {
                setOpen(false);
              }}
            >
              BLOGS
            </Link>
            <Divider />
          </div>
        </div>
      </Drawer>
    </>
  );
};
export default App;
