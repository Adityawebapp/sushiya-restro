import React from "react";

import SideBar from "../sidebar/SideBar";
import ResMainHeader from "../ResMainHeader";


import { Layout } from "antd";
import OrderMainPage from "./OrderMainPage";
const { Content } = Layout;

const Order = () => {
  return (
    <>
      <Layout hasSider>
        <SideBar />

        <Layout className="site-layout" >
          <ResMainHeader />
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, textAlign: "center" }}
            >
              <OrderMainPage />
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Order;
