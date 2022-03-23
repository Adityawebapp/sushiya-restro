import ResMainHeader from "../../ResMainHeader";
import SideBar from "../../sidebar/SideBar";
import { NavLink } from "react-router-dom";
import { PathUrl, Token, UserId } from "../../../../config/Config";

import axios from "axios";
import { useEffect, useState } from "react";
import {
  Row,
  Col,
  Select,
  Button,
  Form,
  Input,
  DatePicker,
  Upload,
  Layout,
  PageHeader,
} from "antd";

import { UploadOutlined } from "@ant-design/icons";
const { Content } = Layout;




function StaffContent() {
  // Token ,UserId and Url
  const token = Token().token;
  const res_id = UserId().user_id;
  const url = PathUrl().urlData.development;

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  // For Random BranchId

  //     let [randomBranchId, setRandomBranchId] = useState(Math.floor(Math.random() * 99999999) + 10000000);
  //     const [selectedImage, setSelectedImage] = useState();
  //     const [branchList, setBranchList] = useState([])
  //     const [staffTypeList, setStaffTypeList] = useState([])

  // console.log(setRandomBranchId)
  //     useEffect(() => {
  //         loadStaffType()
  //         loadBranch()
  //     }, [])

  // const loadStaffType = async () => {
  //     const data = await axios.post(`${url}/staffTypeList`, { res_id: res_id }, { headers: { Authorization: 'Bearer ' + token } })
  //         .then((response) => {
  //             const data = response.data;
  //             return data;
  //         })
  //         .catch((error) => {
  //             console.error(error);
  //         });
  //     setStaffTypeList(data);
  // }

  // const loadBranch = async () => {
  //     const data = await axios.post(`${url}/branchList`, { res_id: res_id }, { headers: { Authorization: 'Bearer ' + token } })
  //         .then((response) => {
  //             const data = response.data;
  //             return data;
  //         })
  //         .catch((error) => {
  //             console.error(error);
  //         });
  //     setBranchList(data);
  // }

  const { RangePicker } = DatePicker;
  const { Option } = Select;

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // const [form] = Form.useForm();

  // const onReset = () => {
  //   form.resetFields();

  const onFinish = (data) => {

    axios.post(
      `${url}/onlineStatus`,
      data, res_id ,
      { headers: { Authorization: "Bearer " + token } }
    )
    .then((response) => {
      const data = response.data;
      console.log(data, "this is from backend..");
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
};


  

  return (
    <>
      <Layout hasSider>
        <SideBar />
        <Layout className="site-layout">
          <ResMainHeader />
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div className="site-layout-background" style={{ padding: 24 }}>
              <PageHeader
                className="site-page-header"
                ghost={false}
                onBack={() => window.history.back()}
                title="Add Staff"
              />
<div className="mt-4 bg-white py-5">
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
                    <Form.Item label="Staff id" name="staff">
                      <Input placeholder="please enter staff " />
                    </Form.Item>

                    <Form.Item
                      name="Staff type"
                      label="Staff type"
                      rules={[
                        {
                          required: true,
                          message: "Please select your Staff type!",
                        },
                      ]}
                    >
                      <Select placeholder="Please select a Staff type">
                        <Option value="Waiter">Waiter</Option>
                        <Option value="Manager">Manager</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item name="Staff Address" label="Staff Address">
                      <Input />
                    </Form.Item>

                    <Form.Item
                      name="Set Passcode"
                      label="set Passcode"
                      rules={[
                        {
                          required: true,
                          message: "Please select your DISH!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>

                  <Col span={10}>
                    <Form.Item label="name " name="name">
                      <Input placeholder="enter name" />
                    </Form.Item>

                    <Form.Item
                      name="Branch"
                      label="discount"
                      rules={[
                        {
                          required: true,
                          message: "Please select your discount!",
                        },
                      ]}
                    >
                      <Select placeholder="Please select a discount">
                        <Option value="sdfsd">sfdsd</Option>
                        <Option value="sfsd">sdfsdf</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item
                      name="upload"
                      label="Upload"
                      valuePropName="fileList"
                      getValueFromEvent={normFile}
                    >
                      <Upload
                        name="logo"
                        action="/upload.do"
                        listType="picture"
                      >
                        <Button icon={<UploadOutlined />}>
                          Click to upload
                        </Button>
                      </Upload>
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
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default StaffContent;
