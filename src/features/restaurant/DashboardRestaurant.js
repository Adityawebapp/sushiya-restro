import React from "react";
import SideBar from "./sidebar/SideBar";
import Maincontent from "./contentWrapper/MainContent";
// import Googlemap from '../../map/GoogleMap'
import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import ResMainHeader from "./ResMainHeader";
import PageContent from "./contentWrapper/PageContent";

function DashboardRestaurant() {
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
              <PageContent />
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default DashboardRestaurant;
