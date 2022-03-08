import React from "react";
import { Table, Space, Switch, Select, Button } from "antd";
import { AiOutlineDelete } from "react-icons/ai";



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

const Ingredient = () => {
  return (
    <>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{
          defaultPofferSize: 5,
          showSizeChanger: true,
          pofferSizeOptions: ["05", "10", "20", "30"],
        }}
      />
    </>
  );
};

export default Ingredient;
