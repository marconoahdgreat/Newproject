import React, { useState } from "react";
import { Card, Divider, Rate, Badge, Modal, Button } from "antd";
import "../Apps.css";

import t1 from "../Images/t1.jpg";
import t2 from "../Images/t2.avif";
import t3 from "../Images/t3.jpg";
import t4 from "../Images/t4.webp";
import t5 from "../Images/t5.jpg";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { color } from "framer-motion";

function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState([]);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const picture = [
    {
      id: 1,
      content: "Allen Iverson MVP - Oversized Tees",
      image: t4,
      rate: 5,
      price: "₱2000",
    },
    {
      id: 2,
      content: "Rolling Stones Kiss - Oversized Tees",
      image: t1,
      rate: 3.5,
      price: "₱1390",
    },
    {
      id: 3,
      content: "Nba Rematch - Oversized Tees",
      image: t5,
      rate: 2,
      price: "₱999",
    },
    {
      id: 4,
      content: "SuperBowl - Oversized Tees",
      image: t3,
      rate: 4,
      price: "₱3899",
    },
  ];

  return (
    <div
      className="CardCss"
      style={{
        display: "flex",
        marginTop: 50,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        flexWrap: "wrap",
      }}
    >
      {picture.map((value) => {
        return (
          <div className="CardCss1">
            <Modal
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              width={300}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              footer={[
                <Button
                  style={{
                    backgroundColor: " rgb(2, 182, 144)",
                    width: "100%",
                    color: "white",
                  }}
                >
                  <ShoppingCartOutlined />
                  ADD TO CART
                </Button>,
              ]}
            >
              <img
                src={modalInfo.image}
                style={{
                  width: "100%",
                  height: 150,
                }}
              ></img>
              <p
                style={{
                  borderStyle: "ridge",
                  borderColor: "rgb(2, 182, 144)",
                  borderRadius: "5px",
                  width: "50px",
                  height: "20px",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                {modalInfo.price}
              </p>
              <p>{modalInfo.content}</p>{" "}
            </Modal>

            <Badge.Ribbon text="SALE!" color="red">
              <Card
                hoverable
                onClick={() => {
                  showModal(value.id);
                  console.log(value);
                  setModalInfo(value);
                }}
                style={{
                  marginLeft: " 10px",
                  textAlign: "center",
                  width: "200px",
                  height: "300px",
                  borderRadius: "10px",
                }}
              >
                {" "}
                <img
                  src={value.image}
                  style={{
                    width: "100%",
                    height: 150,
                  }}
                ></img>{" "}
                <p
                  style={{
                    position: "absolute",
                    borderStyle: "ridge",
                    borderColor: "rgb(2, 182, 144)",
                    borderRadius: "5px",
                    width: "50px",
                    height: "20px",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  {value.price}
                </p>
                <Rate
                  allowHalf
                  disabled
                  defaultValue={value.rate}
                  style={{
                    marginTop: "28px",
                    borderTop: "1px solid",
                    borderColor: "lightgray",
                  }}
                />
                <p>{value.content}</p>
              </Card>
            </Badge.Ribbon>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
