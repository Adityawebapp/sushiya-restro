import React from "react";
import {
  Row,
  Col,
  Select,
  Button,
  Form,
  Input,
  // Upload,
  DatePicker,
  PageHeader,
} from "antd";

const Givediscount = () => {
  const { RangePicker } = DatePicker;
  const { Option } = Select;

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // const [form] = Form.useForm();

  // const onReset = () => {
  //   form.resetFields();

  const onFinish = (fieldsValue) => {
    console.log("Received values of form: ", fieldsValue);
  };

  return (
    <>
    



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
            <Form.Item label="Discount type" name="Discount">
              <Input placeholder="please enter Discount " />
            </Form.Item>

            <Form.Item label="Add title" name="title">
              <Input placeholder="title" />
            </Form.Item>

            <Form.Item
              name="Country"
              label="Country"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please select your Country!",
                },
              ]}
            >
              <Select placeholder="Please select a Country">
                <Option value="USA">USA</Option>
                <Option value="assa">assa</Option>
              </Select>
            </Form.Item>

            <Form.Item name="Duration" label="Duration">
              <RangePicker />
            </Form.Item>


            <Form.Item
              name="DISH"
              label="Select Dish"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please select your DISH!",
                },
              ]}
            >
              <Select placeholder="Please select a DISH">
                <Option value="china">burgur</Option>
                <Option value="usa">samosa</Option>
              </Select>
            </Form.Item>

      
          </Col>

          <Col span={10}>
            <Form.Item label="Coupen code" name="coupen">
              <Input placeholder="Coupen code" />
            </Form.Item>

            <Form.Item label="Select City" name="City">
              <Input placeholder="City" />
            </Form.Item>

            <Form.Item label="select DISCOUNT" name="DISCOUNT">
              <Input placeholder="DISCOUNT" />
            </Form.Item>

            <Form.Item
              name="catagory"
              label="catagory"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please select your catagory!",
                },
              ]}
            >
              <Select placeholder="Please select a catagory">
                <Option value="china">Breac fast</Option>
                <Option value="usa">Lunch</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="Select Discount"
              label="discount"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please select your discount!",
                },
              ]}
            >
              <Select placeholder="Please select a discount">
                <Option value="$ 10%">$ 10%</Option>
                <Option value="$ 20%">$ 20%</Option>
              </Select>
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
            Submit
          </Button>
        </Form.Item>
      </Form>

      {/* ==================================== */}
    </>
  );
};

export default Givediscount;
