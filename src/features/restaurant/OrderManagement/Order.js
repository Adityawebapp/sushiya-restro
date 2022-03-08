import React from "react";

import SideBar from "../sidebar/SideBar";
import ResMainHeader from "../ResMainHeader";
import { Select, Button, Tabs, Input, Badge } from "antd";
import PastOrder from "./pastorder/PastOrder";
import { All } from "./buttonpages/All";
import { Pending } from "./buttonpages/Pending";
import { Packing } from "./buttonpages/Packing";
import { Ready } from "./buttonpages/Ready";
import { Ongoing } from "./buttonpages/Ongoing";


const { TabPane } = Tabs;
function OrderTabs(key) {
  console.log(key);
}
const { Option } = Select;

const Order = () => {
  return (
    <>
      <ResMainHeader />
      <div id="wrapper">
        <SideBar />

        <div id="content-wrapper">
          <div id="content" className="container-fluid">
            <div className="order_detail mt-1">
              <div className="status_bar">
                <Tabs
                  defaultActiveKey="1"
                  type="card"
                  size="large"
                  onChange={OrderTabs}
                  centered
                >
                  <TabPane tab="Live Order" key="1">
                    <div className="first_tab d-flex justify-content-between">
                      <div className="w-50">
                        <Select defaultValue="Option1" className=" mr-5">
                          <Option value="Option1">Banch 1</Option>
                          <Option value="Option2">Option2</Option>
                        </Select>
                        <Input.Search allowClear style={{ width: "50%" }} />
                      </div>
                      <div>
                        <Badge count={5} className="mr-5">
                          <Button
                            size="large"
                            style={{ backgroundColor: "#000", color: "white" }}
                          >
                            Cancelled
                          </Button>
                        </Badge>
                        <Badge count={5} className="mr-5">
                          <Button
                            size="large"
                            style={{
                              backgroundColor: "#2b78e4",
                              color: "#fff",
                            }}
                          >
                            Delayed
                          </Button>
                        </Badge>
                        <Badge count={5} className="mr-5">
                          <Button
                            size="large"
                            style={{ backgroundColor: "blue", color: "#fff" }}
                          >
                            Schedule
                          </Button>
                        </Badge>
                      </div>

                      {/*all choose items */}
                    </div>
                    <div className="order_second d-flex justify-content-between align-items-center">
                      <div className="duration">
                        <Select
                          style={{ width: 200 }}
                          placeholder="Search for Type"
                          optionFilterProp="children"
                        >
                          <Option value="1">Not Identified</Option>
                          <Option value="2">Closed</Option>
                          <Option value="3">Communicated</Option>
                          <Option value="4">Identified</Option>
                          <Option value="5">Resolved</Option>
                          <Option value="6">Cancelled</Option>
                        </Select>
                      </div>
                      <div className="duration">
                        <lebel>Type</lebel>
                        <Select
                          style={{ width: 200 }}
                          placeholder="Search to Select"
                        >
                          <Option value="1">Not Identified</Option>
                          <Option value="2">Closed</Option>
                          <Option value="3">Communicated</Option>
                          <Option value="4">Identified</Option>
                          <Option value="5">Resolved</Option>
                          <Option value="6">Cancelled</Option>
                        </Select>
                      </div>
                    </div>

                    <hr></hr>

                    <div>
                      <Tabs type="card" defaultActiveKey="1" centered>
                        <TabPane tab="All" key="1">
                          <All />
                        </TabPane>
                        <TabPane tab="Pending" key="2">
                          <Pending />
                        </TabPane>
                        <TabPane tab="Packing" key="3">
                          <Packing />
                        </TabPane>
                        <TabPane tab="Ready" key="4">
                          <Ready />
                        </TabPane>
                        <TabPane tab="Onging" key="5">
                        <Ongoing />
                        </TabPane>
                      </Tabs>
                    </div>

                  
                  </TabPane>
                  <TabPane tab="Past Order" key="2">
                    <PastOrder />
                  </TabPane>
                </Tabs>
              </div>
            </div>
     
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
