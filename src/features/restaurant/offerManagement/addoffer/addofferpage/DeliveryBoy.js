import {
  Row,
  Col,
  Input,
  DatePicker,
  Button,
  Form,
  Upload,
  Layout,
  PageHeader,
} from "antd";

import Checkbox from "antd/lib/checkbox/Checkbox";
import ResMainHeader from "../../../ResMainHeader";
import SideBar from "../../../sidebar/SideBar";

const { RangePicker } = DatePicker;
const {Content} = Layout
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

export const DeliveryBoy = () => {
  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = (fieldsValue) => {
    console.log("Received values of form: ", fieldsValue);
  };

  return (
    <>

    
      
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
                <Form.Item name="range-picker" label="RangePicker" 
                rules={[
                  {
                    required: true,
                    message: "Please input your title!",
                  },
                ]}
                
                >
                  <RangePicker format="YYYY-MM-DD " />
                </Form.Item>

                <Form.Item
                  name="upload"
                  label="Upload"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  rules={[
                    {
                      required: true,
                      message: "Please Choose Image!",
                    },
                  ]}
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
                  rules={[
                    {
                      required: true,
                      message: "Please input your title!",
                    },
                  ]}
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
       
 
        
    </>
  );
};
