import React from "react";
import ResMainHeader from "../ResMainHeader";
import SideBar from "../sidebar/SideBar";
import MenuCatelogContent from "./MenuCatelogContent";
import { Layout } from "antd";
const { Header, Content } = Layout;

function MenuCatelogManagement() {
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
              <MenuCatelogContent />
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default MenuCatelogManagement;
