import React from "react";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import styles from "./Login.module.css";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";
import { PathUrl, Token } from "../../../config/Config";
import { useHistory } from "react-router-dom";


export const MyNewLogin = () => {
    const history = useHistory();

  const onFinish = (Formvalues) => {
    
    axios
      .post(`http://52.91.235.134/api/login`, Formvalues, {
        headers: { Authorization: "Bearer "  },
      })
      .then((response) => {
        console.log(response.data, "from restaurant first login controller");
        if (JSON.stringify(response.data.data.user.first_login_flag) === "0") {
          history.push("/restaurantDetails");
        }
        if (JSON.stringify(response.data.data.user.first_login_flag) === "1") {
          history.push("/restaurant");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    console.log(Formvalues, "login form data");
  };





  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className="LoginContainer">
        <Row>
          <Col span={12}>
            <img
              width="100%"
              height="90%"
              src="https://images.pexels.com/photos/7986361/pexels-photo-7986361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="dfgdfg"
            />
          </Col>

          <Col span={12}>
            <div className={styles.MainLoginForm}>
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
                    placeholder="email"
                  />
                </Form.Item>

                <Form.Item
                  label="password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Password"
                  />
                </Form.Item>

                <Form.Item
                  name="remember"
                  valuePropName="remember"
                  wrapperCol={{ offset: 6, span: 16 }}
                >
                  <Checkbox>Remember me</Checkbox>

                  <a className={styles.floatRight} href="">
                    Forgot password
                  </a>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type="primary" htmlType="submit">
                    Sign In
                  </Button>
               <a href="" className={styles.floatRight}>register now!</a>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
