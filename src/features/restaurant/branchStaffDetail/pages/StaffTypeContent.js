import ResMainHeader from "../../ResMainHeader";
import SideBar from "../../sidebar/SideBar";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { PathUrl, Token, UserId } from "../../../../config/Config";
import { useState } from "react";
import {
  Row,
  Col,
  Select,
  Button,
  Form,
  Input,
  Layout,
  PageHeader,
  DatePicker,
} from "antd";

const Content = Layout;

function StaffTypeContent() {
  // Token ,UserId and Url
  const token = Token().token;
  const res_id = UserId().user_id;
  const url = PathUrl().urlData.development;
  // For Random BranchId

  let [randomBranchId, setRandomBranchId] = useState(
    Math.floor(Math.random() * 99999999) + 10000000
  );

  console.log(setRandomBranchId);

  // For Staff Type Form Data
  let [staffType, setStaffType] = useState({
    res_id: res_id,
    staff_type_id: randomBranchId,
    name: "",
  });

  const staffTypeChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    staffType[name] = value;

    setStaffType(staffType);
  };
  const history = useHistory();

  const staffTypeFormData = (e) => {
    e.preventDefault();

    axios
      .post(`${url}/staffType`, staffType, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        swal(
          "Good job!",
          "Your Request Submitted SuccessFully!",
          "success"
        ).then((value) => {
          history.goBack();
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
    {/*    <div id="wrapper">
        <div className="container">
          <div className="row card">
            <form onSubmit={staffTypeFormData}>
              <div class=" card-header col-md-12">
                <NavLink
                  to="/branchStaffDetails"
                  className="fa fa-angle-left colorblack bold text-decoration-none"
                >
                  Add Staff Type
                </NavLink>
              </div>
              <div class="card-body">
                <div className="row">
                  <div className="col-md-12 col-lg-12 col-sm-12">
                    <label className="colorblack bold">Staff Type Id:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="staff_type_id"
                      value={randomBranchId}
                      disabled
                    />
                  </div>

                  <div className="col-md-12 col-lg-12 col-sm-12 mt-3">
                    <label className="colorblack bold"> Name:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      onChange={staffTypeChange}
                    />
                  </div>
                </div>
              </div>
              <div class="card-footer text-center">
                <button type="submit" className="btn btn-primary ">
                  Add Staff Type
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
*/}
      <Layout hasSider>
        <SideBar />
        <Layout className="site-layout">
          <ResMainHeader />
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, textAlign: "center" }}
            >
              <PageHeader
                className="site-page-header"
                ghost={false}
                onBack={() => window.history.back()}
                title=" Add Staff Type"
              />
              <div className="mt-5 py-5 bg-white">
                <Row>
                  <Col span={18}>
                    <Form
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
                        label="staff id"
                        name="staff id"
                        rules={[
                          {
                            required: true,
                            message: "Please input your staff id!",
                          },
                        ]}
                      >
                        <Input value={"dfgdg"} />
                      </Form.Item>

                      <Form.Item
                        label="name"
                        name="name"
                        rules={[
                          {
                            required: true,
                            message: "Please input your name!",
                          },
                        ]}
                      >
                        <Input />
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
                      </Form.Item>
                    </Form>
                  </Col>
                </Row>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default StaffTypeContent;
