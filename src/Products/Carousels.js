import { Button, Carousel } from "antd";
import logo1 from "../Images/kendall.jpg";
import logo2 from "../Images/model.webp";
import logo3 from "../Images/model2.webp";
import "../Apps.css";
import { ArrowRightOutlined } from "@ant-design/icons";

const Carousels = () => (
  <div>
    <Carousel autoplay>
      <div>
        <img
          src={logo1}
          alt="modelling"
          style={{
            width: "100%",
            height: "350px",
            objectFit: "cover",
            objectPosition: "50% 50%",
          }}
        />
      </div>
      <div>
        <img
          src={logo2}
          alt="modelling"
          style={{
            width: "100%",
            height: "350px",
            objectFit: "cover",
            objectPosition: "50% 50%",
          }}
        />
      </div>
      <div>
        <img
          src={logo3}
          alt="modelling"
          style={{
            width: "100%",
            height: "350px",
            objectFit: "cover",
            objectPosition: "50% 50%",
          }}
        />
      </div>
      <div>
        <img
          src={logo2}
          alt="modelling"
          style={{
            width: "100%",
            height: "350px",
            objectFit: "cover",
            objectPosition: "50% 50%",
          }}
        />
      </div>
    </Carousel>
  </div>
);
export default Carousels;
