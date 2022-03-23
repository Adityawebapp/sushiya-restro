import React from "react";


import { Select, Button, Tabs, Input, Badge } from "antd";
import PastOrder from "./pastorder/PastOrder";
import { All } from "./buttonpages/All";
import { Pending } from "./buttonpages/Pending";
import { Packing } from "./buttonpages/Packing";
import { Ready } from "./buttonpages/Ready";
import { Ongoing } from "./buttonpages/Ongoing";
import { Link } from "react-router-dom";
import { Layout } from "antd";
const {Option} =Select
const { TabPane } = Tabs;
function OrderTabs(key) {
  console.log(key);
}



const OrderMainPage = () => {
  return (
    <>
     
<Layout className="site-layout" >
    
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
       
            <Select defaultValue="Option1" className=" mr-5">
              <Option value="Option1">Banch 1</Option>
              <Option value="Option2">Option2</Option>
            </Select>
            <Input.Search allowClear style={{ width: "30%" }} />
         
          <div>
            <Badge count={5} className="mr-5">
              <Link to="/Cancelled">
  
                <Button
                  size="large"
                  style={{
                    backgroundColor: "#000",
                    color: "white",
                  }}
                >
                  Cancelled
                </Button>
              </Link>
            </Badge>
            <Badge count={5} className="mr-5">
              <Link to="delayed">
                <Button
                  size="large"
                  style={{
                    backgroundColor: "#2b78e4",
                    color: "#fff",
                  }}
                >
                  Delayed
                </Button>
              </Link>
            </Badge>
            <Badge count={5} className="mr-5">
              <Link to="schedule">
      
                <Button
                  size="large"
                  style={{
                    backgroundColor: "blue",
                    color: "#fff",
                  }}
                >
                  Schedule
                </Button>
              </Link>
            </Badge>
          </div>

          {/*all choose items */}
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


</Layout>
      
    </>
  );
};

export default OrderMainPage;
