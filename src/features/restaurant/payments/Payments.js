
import React from "react";
import SideBar from "../sidebar/SideBar";
import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";

import PaymentMainpage from "./PaymentMainpage";
import ResMainHeader from "../ResMainHeader";

function Payments() {
  return (
    <>
      <Layout hasSider>
        <SideBar />

      

        <Layout className="site-layout">
          
        <ResMainHeader/>
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, textAlign: "center" }}
            >
             <PaymentMainpage/>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default Payments;
