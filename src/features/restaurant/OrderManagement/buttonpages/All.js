import React from "react";
import { Row, Col, Button } from "antd";
import { BsArrowRight } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
const imageSize = { fontSize: "2rem" };
export const All = () => {
  return (
    <>
   
  
      <div className="schedules">
        <div className="bg-success py-4">
          <Row align="center">
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <p style={{ fontWeight: 700 }}>
                <span className="text-white mr-2"> Order Id </span>{" "}
                <span>#JDF7K8</span>
              </p>
            </Col>
            <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <Button size="large" style={{ color: "green" }}>
                New Order Received
              </Button>
            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <AiFillDelete style={imageSize} />
              <BsArrowRight style={imageSize} />
            </Col>
          </Row>
        </div>

        <div className="bg-warning py-4 mt-4">
          <Row align="center">
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <p style={{ fontWeight: 700 }}>
                <span className="text-white mr-2"> Order Id </span>{" "}
                <span>#JDF7K8</span>
              </p>
            </Col>
            <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <Button size="large" style={{ color: "green" }}>
                New Order Received
              </Button>
            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <AiFillDelete style={imageSize} />
              <BsArrowRight style={imageSize} />
            </Col>
          </Row>
        </div>
      </div>

      {/*second */}

    

    </>
  );
};
