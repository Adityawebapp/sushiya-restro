import React from "react";
import ResMainHeader from "../ResMainHeader";
import SideBar from "../sidebar/SideBar";
import BranchStaffContent from "./BranchStaffContent";
import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";

function BranchStaffManagement() {
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
            
              <BranchStaffContent />
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default BranchStaffManagement;
