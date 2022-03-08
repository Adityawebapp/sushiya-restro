import React from "react";
import { Tabs } from "antd";
import { Table, Space, Switch, Select, Button } from "antd";
import Combo from "./combo/Combo";
import DishItem from "./dishitem/DishItem";
import Ingredient from "./Ingredient/Ingredient";
const { TabPane } = Tabs;

const Menu = () => {

  // End Purchase
  function callback(key) {
    console.log(key);
  }

  return (
    <>
      <div className="">
        <Tabs onChange={callback} type="card" size="large" centered>
          <TabPane tab="Combo" key="1">
            <Combo/>
          </TabPane>
          <TabPane tab="Dish Item" key="2">
            <DishItem/>
          </TabPane>
          <TabPane tab="Ingredient" key="3">
            <Ingredient/>
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default Menu;
