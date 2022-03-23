import { Row, Col, Radio, Form, PageHeader } from "antd";
import React, { useState } from "react";
import ResMainHeader from "../../ResMainHeader";
import SideBar from "../../sidebar/SideBar";
import Givediscount from "./addofferpage/Givediscount";
import Spendearn from "./addofferpage/Spendearn";
import { DeliveryBoy } from "./addofferpage/DeliveryBoy";
import { Layout } from "antd";
const { Content } = Layout;

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const normFile = (e) => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

export const Addoffer = () => {
  const [value, setValue] = React.useState(3);

  const [form] = Form.useForm();

  const onFinish = (fieldsValue) => {
    console.log("Received values of form: ", fieldsValue);
  };

  const onChangeRadio = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Layout hasSider>
        <SideBar />

        <Layout className="site-layout">
          <ResMainHeader />
          {/* main code start    */}
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div className="site-layout-background" style={{ padding: 24 }}>
              <PageHeader
                ghost={false}
                onBack={() => window.history.back()}
                title="Create Offer"
              />

              <div className="my-5">
                <Row>
                  <Col span={18}>
                    <Form
                      form={form}
                      name="basic"
                      labelCol={{
                        span: 8,
                      }}
                      wrapperCol={{
                        span: 16,
                      }}
                      initialValues={{
                        remember: true,
                      }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      autoComplete="off"
                    >
                      <Form.Item
                        label="Discount Type"
                        name="item"
                        rules={[
                          {
                            required: true,
                            message: "Please input your item!",
                          },
                        ]}
                      >
                        <Radio.Group
                          onChange={onChangeRadio}
                          checked={true}
                          value={value}
                        >
                          <Radio value={1} >Delivery boy</Radio>
                          <Radio value={2}>Spend Earn</Radio>
                          <Radio value={3}>Give Discound</Radio>
                        </Radio.Group>
                      </Form.Item>
                    </Form>
                  </Col>
                </Row>

                {/* =========  2nd section  ================== 

              {DeveleryBoy && <DeliveryBoy />}
              {spendEarn && <Spendearn />}
              {giveOffer && <Givediscount />}

               */}
                {value === 1 ? <DeliveryBoy /> : null}
                {value === 2 ? <Spendearn /> : null}
                {value === 3 ? <Givediscount /> : null}
              </div>
            </div>
            {/* end main code */}
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
