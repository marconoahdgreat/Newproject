import { Button, Dropdown, Space } from "antd";
import {
  MenuOutlined,
  HomeOutlined,
  UserOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const items = [
  {
    label: (
      <Link to="/">
        <HomeOutlined />
        Home
      </Link>
    ),
  },
  {
    label: (
      <Link to="/about">
        <UserOutlined />
        About us
      </Link>
    ),
  },
  {
    label: (
      <Link to="/contacts">
        <PhoneOutlined /> Contacts
      </Link>
    ),
  },
];
const NavDrawer = () => (
  <Space direction="vertical">
    <Space wrap>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomLeft"
      >
        <Button>
          <MenuOutlined />
        </Button>
      </Dropdown>
    </Space>
  </Space>
);
export default NavDrawer;
