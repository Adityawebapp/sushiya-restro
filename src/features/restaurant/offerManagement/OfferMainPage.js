import { Table, Space, Switch, Select, Button, Layout, PageHeader } from "antd";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const { Content } = Layout;

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

const OfferMainPage = () => {
  return (
    <>
      <Layout className="site-layout">
        <PageHeader
          className="site-page-header"
          ghost={false}
          onBack={() => window.history.back()}
          title="Offers / Discount"
          
        />

       
        <div className="status_div d-flex justify-content-between  my-5">
        <div className="d-flex">
          <h5 className="mr-2">Status</h5>
          <Select defaultValue="lucy" style={{ width: 120 }}>
            <Option value="jack">Approved</Option>
            <Option value="lucy">No</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
          </div>
          <Link to="/addoffer">
          <Button type="primary" size="large">
            Add Offer
          </Button>
        </Link>
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
      </Layout>
    </>
  );
};

export default OfferMainPage;
