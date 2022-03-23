import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import Footer from "../../../admin/footer/Footer";
import ResMainHeader from "../../ResMainHeader";
import SideBar from "../../sidebar/SideBar";
import { Token, UserId } from "../../../../config/Config";
import { message, Layout, InputNumber,PageHeader } from "antd";

import { Row, Col, Select, Button, Form, Input } from "antd";

const { Content } = Layout;

function IngredientContent() {
  const [form] = Form.useForm();
  const { Option } = Select;

  const token = Token().token;
  const res_id = UserId().user_id;

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = (fieldsValue) => {
    axios
    .post("http://52.91.235.134/api/IngredientStore", fieldsValue,res_id, {
      headers: { Authorization: "Bearer " + token },
    })
    .then((response) => {
      message.success("form save successfully");
      form.resetFields();
      console.log(response.data, "ingredient ka return data");
    })
    .catch((error) => {
      console.error(error);
    });
    console.log(fieldsValue);
  };

  return (
    <>
      <Layout hasSider>
        <SideBar />
        <Layout className="site-layout" >
          <ResMainHeader />
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
         
          <PageHeader
          ghost={false}
          className="site-page-header"
          onBack={() => window.history.back()}
          title="ADD INGREDIENT"
        />
          <div
          className="site-layout-background"
          style={{ padding: 24, textAlign: "center" }}
        >

      


              <Form
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 15 }}
                layout="horizontal"
                size="middle"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Row justify="center">
                  <Col span={10}>
                    <Form.Item label="Ingredient Name" name="name">
                      <Input />
                    </Form.Item>

                    <Form.Item label="Cost Per Unit" name="cost_per_unit">
                      <InputNumber style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item
                      name="purchase_measure"
                      label="Purchase Measure"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please select your DISH!",
                        },
                      ]}
                    >
                      <Select placeholder="Please select a DISH">
                        <Option value="Milliliters"> Milliliters (ml)</Option>
                        <Option value="Liters">Liters</Option>
                        <Option value="Deciliter">Deciliter</Option>
                        <Option value="Liquid ounce"> Liquid ounce </Option>
                        <Option value="Pounds">Pounds</Option>
                        <Option value="Ounce">Ounce</Option>
                        <Option value="Milligrams">Milligrams</Option>
                        <Option value="Grams">Grams</Option>
                        <Option value="Kilograms">Kilograms</Option>
                        <Option value="Teaspoonful">Teaspoonful</Option>
                        <Option value="Tablespoon">Tablespoon</Option>
                        <Option value="Glass">Glass</Option>
                        <Option value="Taza">Taza</Option>
                        <Option value="Bowl">Bowl</Option>
                        <Option value="Pinta">Pinta</Option>
                        <Option value="Barrel">Barrel</Option>
                        <Option value="Gill">Gill</Option>
                        <Option value="Quartos">Quartos</Option>
                        <Option value="Gallons">Gallons</Option>
                        <Option value="Bag">Bag</Option>
                        <Option value="Container">Container</Option>
                        <Option value="Bottle">Bottle</Option>
                        <Option value="Paperboard">Paperboard</Option>
                        <Option value="Box">Box</Option>
                        <Option value="Roll">Roll</Option>
                        <Option value="Jar">Jar</Option>
                        <Option value="Unit">Unit</Option>
                        <Option value="Each">Each</Option>
                        <Option value="Package">Package</Option>
                        <Option value="Pinch">Pinch</Option>
                      </Select>
                    </Form.Item>
                  </Col>

                  <Col span={10}>
                    <Form.Item label="Stock" name="stock">
                      <InputNumber style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item
                      label="Low Level Warning "
                      name="low_level_warning"
                    >
                      <InputNumber style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item
                      label="Enter Value"
                      name="value"
                      rules={[{ type: "number", min: 0 }]}
                    >
                      <InputNumber style={{ width: "100%" }} />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Update
                  </Button>
                </Form.Item>
              </Form>

              {/* ==================================== */}
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default IngredientContent;
