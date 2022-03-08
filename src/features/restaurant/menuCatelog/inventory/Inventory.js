import React, { useState } from "react";
import { Modal, Button } from "antd";
// import { Link, NavLink } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import { Row, Col, Radio, Form, Checkbox, Select, Input } from "antd";

const Inventory = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const { Option } = Select;
  return (
    <>
      <div>
        <div class="card-body">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product</th>
                <th scope="col">Count</th>
                <th scope="col">Last Update</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <Button type="none" onClick={showModal}>
                    <BsPlusLg />
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* modal start here */}
      <Modal
        centered
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="">
          <h5 className="text-center mb-4">Upgrade Ingredient Count</h5>
          <div className="border p-3">
            <Form
              name="basic"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item name="radio-group" label="Choose Action">
                <Radio.Group>
                  <Radio value="Purchase">Purchase</Radio>
                  <Radio value="Adjust">Adjust</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                name="purchaseMeasure"
                label="Purchase Measure"
                rules={[{ required: true, message: "Please select gender!" }]}
              >
                <Select placeholder="Choose">
                  <Option value="Kg">Kg</Option>
                  <Option value="Gram">Gram</Option>
                  <Option value="ML">ML</Option>
                  <Option value="Litre">Litre</Option>
                  <Option value="Pound">Pound</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Enter Quantity"
                name="quantity"
                rules={[
                  { required: true, message: "Please input your Quantity!" },
                ]}
              >
                <Input />
              </Form.Item>


              <Form.Item wrapperCol={{ offset: 8, span: 16 }} >
                <Button type="primary" htmlType="submit" size="large">
                  Submit
                </Button>
              </Form.Item>
            </Form>

            {/*  <Row>
              
                <Col span={8} className="mb-3">
                  <p>Choose Action</p>
                </Col>
                <Col span={14}>
                  <Radio.Group name="radiogroup" defaultValue={1}>
                    <Radio value="Purchase">Purchase</Radio>
                    <Radio value="Adjust">Adjust</Radio>
                  </Radio.Group>
                </Col>
            
              <Col span={8}  className="mb-3">
                <p>Purchase Measure</p>
              </Col>
              <Col span={16}>
                <Select
                  showSearch
                  style={{ width: 233 }}
                  placeholder="Search to Select"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.children
                      .toLowerCase()
                      .localeCompare(optionB.children.toLowerCase())
                  }
                >
                  <Option value="Kg">Kg</Option>
                  <Option value="Gram">Gram</Option>
                  <Option value="ML">ML</Option>
                  <Option value="Litre">Litre</Option>
                  <Option value="Pound">Pound</Option>
                </Select>
              </Col>

              <Col span={8}  className="mb-3">
                <p>Entry Quantity</p>
              </Col>
              <Col span={16}>
                <Input width={80} placeholder="Enter Quantity" />
              </Col>
            </Row> */}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Inventory;
