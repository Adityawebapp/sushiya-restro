import React from "react";
import SideBar from "../sidebar/SideBar";
import ResMainHeader from "../ResMainHeader";
import { Table, Space, Switch, Select, Button } from "antd";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
const { Option } = Select;
const dataSource = [
  {
    key: "1",
    offerID: "#1212",
    offer: "spend More",
    date: "08/09/2021",
    to: "09/09/2022",
    status: "Approved",
    action: "sss",
  },
];

const columns = [
  {
    title: "Offer Id",
    dataIndex: "offerID",
    key: "offerID",
  },
  {
    title: "On Offer",
    dataIndex: "offer",
    key: "offer",
  },
  {
    title: "From",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "To",
    dataIndex: "to",
    key: "to",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Action",
    dataIndex: "sss",
    key: "sss",
    render: (text, record) => (
      <Space size="middle">
        <AiOutlineDelete size="30" />
        <Switch defaultChecked size="large" />
      </Space>
    ),
  },
];

const offer = () => {
  return (
    <>
      <ResMainHeader />
      <div id="wrapper">
        <SideBar />

        <div id="content-wrapper">
          <div className="addOffer_container d-flex justify-content-between mx-5 my-3">
            <h4>Offers / Discount</h4>
           <Link to="/addoffer"> <Button type="primary" size="large">
              Add Offer
            </Button></Link>
          </div>
          <div className="status_div d-flex justify-content-end mr-5 my-5">
            <h5 className="mr-2">Status</h5>
            <Select defaultValue="lucy" style={{ width: 120 }}>
              <Option value="jack">Approved</Option>
              <Option value="lucy">No</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
          <div id="content" className="container-fluid">
            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={{
                defaultPofferSize: 5,
                showSizeChanger: true,
                pofferSizeOptions: ["05", "10", "20", "30"],
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default offer;
