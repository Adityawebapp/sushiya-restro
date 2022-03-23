import React from "react";
import {
  Row,
  Col,
  Button,
  Image,
  Space,
  Divider,
  Modal,
  Avatar,
} from "antd";
import { useState } from "react";

export const Packing = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      
       
            <Row className="my-3">
              <Col span={12}>
                <h6> Name :</h6>
              </Col>
              <Col span={12} style={{ textAlign: "end" }}>
                <h6> Delivered</h6>
              </Col>
            </Row>
            <Row className="my-4">
              <Col span={8}>
                <h6> Order Id : #123</h6>
              </Col>
              <Col span={8}>
                <Button>Delayed</Button>
              </Col>
              <Col span={8} style={{ textAlign: "end" }}>
                <h6>Deliver Boy Arriing in : 15 min </h6>
              </Col>
            </Row>

            <Row>
              <Col span={8}>
                <div className="d-flex align-items-center">
                  <Avatar
                    shape="square"
                    size={100}
                    src={<Image src="https://joeschmoe.io/api/v1/random" />}
                  />
                  <h6>Disha singh</h6>
                </div>
                <Space>
                  <Button size="large" background="pink">
                    Special Request
                  </Button>
                  <Button size="large">Allergie Request</Button>
                </Space>
              </Col>
              <Col span={8}>
                <h6>date: 12/02/2021</h6>
                <h6>Self Pickup</h6>
              </Col>
              <Col span={8} align="end">
                <Space>
                  <Button
                    size="large"
                    background="pink"
                    onClick={() => setVisible(true)}
                  >
                    Accept
                  </Button>
                  <Button size="large">Reject</Button>
                </Space>
              </Col>
            </Row>
            <Divider />
            <Row>
              <Col span={8}>
                <div className="d-flex align-items-center">
                  <Avatar
                    shape="square"
                    size={100}
                    src={<Image src="https://joeschmoe.io/api/v1/random" />}
                  />
                  <h6>Disha singh</h6>
                </div>
                <Space>
                  <Button size="large" background="pink">
                    Special Request
                  </Button>
                  <Button size="large">Allergie Request</Button>
                </Space>
              </Col>
              <Col span={8}>
                <h6>date: 12/02/2021</h6>
                <h6>Self Pickup</h6>
              </Col>
              <Col span={8} align="end">
                <Space>
                  <Button size="large" background="pink">
                    Accept
                  </Button>
                  <Button size="large">Reject</Button>
                </Space>
              </Col>
            </Row>
            <Divider />

            {/*modal pop */}
            <Modal
              title="Modal 1000px width"
              centered
              visible={visible}
              onOk={() => setVisible(false)}
              onCancel={() => setVisible(false)}
            >
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
            </Modal>
      
   
    </>
  );
};
