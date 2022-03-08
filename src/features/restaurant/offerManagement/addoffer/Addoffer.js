import {
  Row,
  Col,
  Radio,
  Input,
  DatePicker,
  Button,
  Form,
  Upload,
} from "antd";
import React, { useState } from "react";
import ResMainHeader from "../../ResMainHeader";
import SideBar from "../../sidebar/SideBar";
import Checkbox from "antd/lib/checkbox/Checkbox";
import Givediscount from "./addofferpage/Givediscount";
import Spendearn from "./addofferpage/Spendearn";

const { RangePicker } = DatePicker;


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
  // const [DeveleryBoy, setDeveleryBoy] = useState(false);
  // const [giveOffer, setGiveOffer] = useState(false);
  // const [discount, setDiscount] = useState();
  
  
  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

 
  const onFinish = (fieldsValue) => {
    console.log("Received values of form: ", fieldsValue);
  };

  // const spenearnFun = ()=>{
  
  // }

  // const giveDiscount=()=>{
   
  // }

  // const DeliveryBooy=()=>{

  // }

  return (
    <>
      <ResMainHeader />
      <div id="wrapper">
        <SideBar />

        <div id="content-wrapper">
        <div className="border bg-light shadow py-5">
          <Row >
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
                  <Radio.Group>
                    <Radio value="1">Delivery boy</Radio>
                    <Radio value="2" >Spend Earn</Radio>
                    <Radio value="3">Give Discound
                    </Radio>
                  </Radio.Group>
                </Form.Item>

                <Form.Item
                  label="Discount Type"
                  name="discount"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Coupen code"
                  name="code"
                  rules={[
                    {
                      required: true,
                      message: "Please input your code!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="title aad"
                  name="title"
                  rules={[
                    {
                      required: true,
                      message: "Please input your title!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item name="range-picker" label="RangePicker">
                  <RangePicker format="YYYY-MM-DD " />
                </Form.Item>

                <Form.Item
                  name="upload"
                  label="Upload"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  extra="longgggggggggggggggggggggggggggggggggg"
                >
                  <Upload name="logo" action="/upload.do" listType="picture">
                    <Button>Click to upload</Button>
                  </Upload>
                </Form.Item>

                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Save & Submit For Approval
                  </Button>
                  <Button htmlType="button" onClick={onReset}>
                    Reset
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>

          {/* =========  2nd section  ==================  */}

      
            <Spendearn/> 
 
           
           <Givediscount/> 

         
          
          </div>
        </div>
      </div>
    </>
  );
};
