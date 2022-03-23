import React from "react";
import { Layout } from "antd";
import SideBar from "../sidebar/SideBar";
import ResMainHeader from "../ResMainHeader";
import RevenueMainPage from "./RevenueMainPage";

const { Content } = Layout;

const RevenueGrowth = () => {
  return (
    <>
      <Layout hasSider>
        <SideBar />
        <Layout className="site-layout" style={{ marginLeft: 100 }}>
          <ResMainHeader />
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, textAlign: "center" }}
            >
              <RevenueMainPage />
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default RevenueGrowth;
