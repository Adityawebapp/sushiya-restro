import React, { useState } from "react";
import {
  Space,
  Button,
  Row,
  Col,
  Avatar,
  Image,
  Select,
  Drawer,
  Layout,
} from "antd";
import { AiFillStar } from "react-icons/ai";


const Option = Select;
function PastOrder() {
  const [visible, setVisible] = useState(false);

  const showDefaultDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const { Content } = Layout;
  return (
    <>
   
    
      <Layout className="site-layout" >
        <Content style={{ overflow: "initial" }}>
          <div
            className="site-layout-background"
            style={{ padding: 0, textAlign: "center" }}
          >
            <Row>
              <Col span={24}>
                <Select defaultValue="Option1" className=" my-5">
                  <Option value="Option1">Banch 1</Option>
                  <Option value="Option2">Option2</Option>
                </Select>
              </Col>
              <Col span={8}>
                <div className="d-flex align-items-center">
                  <Avatar
                    shape="square"
                    size={70}
                    src={<Image src="https://joeschmoe.io/api/v1/random" />}
                  />
                  <h6>Item 2</h6>
                  <h6>Price $ 2</h6>
                </div>
              </Col>
              <Col span={8}>
                <h6>date: 12/02/2021</h6>
                <h6>Self Pickup</h6>
              </Col>
              <Col span={8} align="center">
                <Space>
                  <Button size="large" background="pink">
                    Delivered
                  </Button>
                  <Button size="large" onClick={showDefaultDrawer}>
                    More Info
                  </Button>

                  <Drawer
                    zIndex="1000"
                    placement="right"
                    size="default"
                    onClose={onClose}
                    visible={visible}
                  >
                    <div className="">
                      <h3>Customer Name</h3>
                      <p>Location</p>
                      <div className="d-flex justify-content-between ">
                        <p>
                          Order Id <span>#45fd</span>{" "}
                        </p>
                        <p>09:30</p>
                        <p>8 March 2021</p>
                      </div>
                    </div>
                    <div className="">
                      <h3>Order Item</h3>
                      <div className="d-flex justify-content-between "></div>
                    </div>

                    <Avatar
                      shape="square"
                      size={70}
                      src={<Image src="https://joeschmoe.io/api/v1/random" />}
                    ></Avatar>
                    <Button
                      size="small"
                      style={{ margin: "0 16px", verticalAlign: "middle" }}
                    >
                      item 1 x 1
                    </Button>
                    <hr></hr>
                    <div className="d-flex justify-content-between">
                      <p>Order Total </p>
                      <p>$ 20 </p>
                    </div>
                    <hr></hr>
                    <div className="d-flex justify-content-between">
                      <p>Order Total </p>
                      <Button type="ghost">Completed</Button>
                    </div>
                    <hr></hr>
                    <div className="d-flex justify-content-between">
                      <p>Installation</p>
                      <Button type="ghost">Completed</Button>
                    </div>
                    <hr></hr>

                    <div className="ratings">
                      <h6>Ratings Given</h6>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </Drawer>
                </Space>
              </Col>
            </Row>



            
          </div>
        </Content>
      </Layout>
  
    </>
  );
}

export default PastOrder;
