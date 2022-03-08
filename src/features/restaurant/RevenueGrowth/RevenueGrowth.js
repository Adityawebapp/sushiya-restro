import React from "react";
import ResMainHeader from "../ResMainHeader";
import SideBar from "../sidebar/SideBar";
import { Bar } from "react-chartjs-2";
import { Select, Row, Col, Space, Statistic, Card, Button } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
const { Option } = Select;




const RevenueGrowth = () => {
 

  
  
  
  return (
    <>
      <ResMainHeader />
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper">
          <div className="bg-white h-100 p-4">
            <h6>Restaurant Name</h6>
            <Row>
              <Col span={8}>
                <div className="d-flex align-items-center">
                  <h6>Location</h6>
                </div>
              </Col>
              <Col span={8}>
                <h6>Verified</h6>
              </Col>
              <Col span={8} align="end">
                <Space>
                  <Button size="large" background="pink">
                    Accept
                  </Button>
                </Space>
              </Col>
            </Row>

            <div>
              <Row className="border bg-light shadow px-5 py-3">
                <Col span={12}> performance star</Col>

                <Col span={12} className="text-end">
                  <div className="d-flex justify-content-end">
                    <h5>Sort</h5>
                    <Select size="large" style={{ width: 120 }}>
                      <Option key={1} value="lucy"></Option>
                    </Select>
                  </div>
                </Col>
              </Row>
              <Row className="border bg-light shadow py-5 mt-4">
                <Col span={14}>
                  <Space>
                    <h4>Total Order</h4>
                    <p>data</p>
                  </Space>
                </Col>
                <div className="px-5">
                  <div className="site-statistic-demo-card">
                    <Row>
                      <Col span={24}>
                        <Card className="">
                          <Statistic
                            title="REVENUE"
                            value={11.28}
                            precision={2}
                            valueStyle={{ color: "#3f8600" }}
                            prefix={<ArrowUpOutlined />}
                            suffix="%"
                          />
                          <Statistic
                            value={9.3}
                            precision={2}
                            valueStyle={{ color: "#cf1322" }}
                            prefix={<ArrowDownOutlined />}
                            suffix="%"
                          />
                        </Card>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Row>

{ /*   ================== */ } 

<div className="card-one">

<Bar
  data="dfsdf"
  options={{
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    },
    legend: {
      display: true,
      position: "bottom"
    }
  }}
  height={140}
/>
</div>


{ /*   ================== */ } 



            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RevenueGrowth;
