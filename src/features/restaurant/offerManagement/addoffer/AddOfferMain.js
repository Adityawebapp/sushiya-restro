import React from "react";

import ResMainHeader from "../../ResMainHeader";
import { Addoffer } from "./Addoffer";
import SideBar from "../../sidebar/SideBar";
import { Layout } from "antd";
const { Content } = Layout;

const AddOfferMain = () => {
  return (
    <>
      

      <Layout hasSider>
      <SideBar />

     
      <Layout className="site-layout">
        <ResMainHeader />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: "center" }}
          >
          <Addoffer />
          </div>
        </Content>
      </Layout>
    </Layout>


    </>
  );
};

export default AddOfferMain;
