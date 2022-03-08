import React from "react";
import SideBar from "./sidebar/SideBar";
import Maincontent from "./contentWrapper/MainContent";
// import Googlemap from '../../map/GoogleMap'
import { Layout } from "antd";

function DashboardRestaurant() {
  return (
    <>
      <Layout hasSider>
        <div id="wrapper">
          <SideBar />
          <Maincontent />
        </div>
      </Layout>
    </>
  );
}

export default DashboardRestaurant;
