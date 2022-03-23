import React from "react";
import SideBar from "../sidebar/SideBar";
import ResMainHeader from "../ResMainHeader";
import OfferMainPage from "./OfferMainPage";
import { Layout } from "antd";
const { Content } = Layout;

const Offer = () => {
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
              <OfferMainPage />
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Offer;
