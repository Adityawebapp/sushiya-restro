import React from "react";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import axios from "axios";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const Forget = () => {
  const onFinishFailed = (fail) => {
    console.log(fail);
  };

  const onFinish = (Formvalues) => {
    console.log(Formvalues);
  };
  return (
    <>
      <div className="LoginContainer">
        <Row>
          <Col span={12}>
            <div>
              <div className="text-center">
                <h1>Sushiya</h1>
                <hr />
              </div>
              <Form
                name="basic"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 15 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item label="Username" name="email">
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Enter Email"
                  />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type="primary" htmlType="submit">
                    Sign In
                  </Button>
                  <a href="" target="_blank">
                    Sign In now!
                  </a>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Forget;
