import React, { useState } from "react";


import { Tabs } from "antd";
import Menu from "./Menu/Menu";
import Inventory from "./inventory/Inventory";
import { MyListing } from "./mylisting/MyListing";
import { PurchaseOrder } from "./purchaseOrder/PurchaseOrder";
import Footer from "../../admin/footer/Footer";

const { TabPane } = Tabs;

function MenuCatelogContent() {
  
 

  // End Purchase
  function callback(key) {
    console.log(key);
  }

  return (
    <>
      {/* <!-- Content Wrapper --> */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">
          <div className="container">


            <Tabs onChange={callback} type="card" size="large" centered>
              <TabPane tab="Menu" key="1">
                <Menu />
              </TabPane>
              <TabPane tab="Inverntory" key="2">
                <Inventory/>
              </TabPane>
              <TabPane tab="My Listing" key="3">
                <MyListing/>
              </TabPane>
              <TabPane tab="Purchase Order" key="4">
                <PurchaseOrder/>
              </TabPane>
            </Tabs>

      
          </div>
        </div>
        {/* <!-- End of Main Content --> */}

        <Footer />
      </div>
    </>
  );
}

export default MenuCatelogContent;
