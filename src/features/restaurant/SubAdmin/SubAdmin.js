import React from "react";
import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import SideBar from "../sidebar/SideBar";
import ResMainHeader from "../ResMainHeader";



function SubAdmin() {
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
              <h3>subadmin</h3>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default SubAdmin;
