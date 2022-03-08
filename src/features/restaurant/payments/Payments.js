import React from "react";
import ResMainHeader from "../ResMainHeader";
import SideBar from "../sidebar/SideBar";
import { Card, Col, Row, PageHeader,  Descriptions } from "antd";
import { GiWallet } from "react-icons/gi";
const Payments = () => {
  return (
    <>
      <ResMainHeader />
      <div id="wrapper">
        <SideBar />

        <div id="content-wrapper" style={{ padding: 30 }}>
          <div className="site-page-header-ghost-wrapper border">
            <PageHeader>
              <h4 className="border-bottom pb-2">My Payments</h4>
              <h4 className="text-danger mb-1 ">Django dear</h4>
              <p className="mb-0 text-muted">Randail ryla</p>
              <p className="text-muted">Restairant</p>

              <Descriptions size="small" column={4}>
                <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
                <Descriptions.Item label="Association">
                  <p>421421</p>
                </Descriptions.Item>
                <Descriptions.Item label="Creation Time">
                  Id: #del345345
                </Descriptions.Item>
                <Descriptions.Item label="Creation Time">
                  varifyed
                </Descriptions.Item>
              </Descriptions>
            </PageHeader>
          </div>

          <div className="site-card-wrapper mt-4">
            <div className="main-card">
              <h4>Total Busiess</h4>
              <Row gutter={16}>
                <Col span={8}>
                  <div className="gutter-box">
                    <Card bordered={false} className="bg-info">
                      <div className="clear">
                        <div className="float-right">
                          <GiWallet style={{ fontSize: 70 }} />
                        </div>
                        <div className="clear">
                          <div className="text-muted">TODAY'S REVENUE</div>
                          <h2>$301</h2>
                          <p>10 orders </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Col>

                <Col span={8}>
                  <div className="gutter-box">
                    <Card bordered={false} className="bg-danger">
                      <div className="clear">
                        <div className="float-right">
                          <GiWallet style={{ fontSize: 70 }} />
                        </div>
                        <div className="clear">
                          <div className="text-muted">TODAY'S REVENUE</div>
                          <h2>$301</h2>
                          <p>10 orders </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Col>

                <Col span={8}>
                  <div className="gutter-box">
                    <Card bordered={false} className="bg-success">
                      <div className="clear">
                        <div className="float-right">
                          <GiWallet style={{ fontSize: 70 }} />
                        </div>
                        <div className="clear">
                          <div className="text-muted">TODAY'S REVENUE</div>
                          <h2>$301</h2>
                          <p>10 orders </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="main-card mt-5">
              <h4>Payments</h4>
              <Row gutter={16}>
                <Col span={8}>
                  <div className="gutter-box">
                    <Card bordered={false} className="bg-info">
                      <div className="clear">
                        <div className="float-right">
                          <GiWallet style={{ fontSize: 70 }} />
                        </div>
                        <div className="clear">
                          <div className="text-muted">TODAY'S REVENUE</div>
                          <h2>$301</h2>
                          <p>10 orders </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Col>

                <Col span={8}>
                  <div className="gutter-box">
                    <Card bordered={false} className="bg-danger">
                      <div className="clear">
                        <div className="float-right">
                          <GiWallet style={{ fontSize: 70 }} />
                        </div>
                        <div className="clear">
                          <div className="text-muted">TODAY'S REVENUE</div>
                          <h2>$301</h2>
                          <p>10 orders </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Col>

                <Col span={8}>
                  <div className="gutter-box">
                    <Card bordered={false} className="bg-success">
                      <div className="clear">
                        <div className="float-right">
                          <GiWallet style={{ fontSize: 70 }} />
                        </div>
                        <div className="clear">
                          <div className="text-muted">TODAY'S REVENUE</div>
                          <h2>$301</h2>
                          <p>10 orders </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="main-card mt-5">
              <h4>Cancellations</h4>
              <Row gutter={16}>
                <Col span={8}>
                  <div className="gutter-box">
                    <Card bordered={false} className="bg-info">
                      <div className="clear">
                        <div className="float-right">
                          <GiWallet style={{ fontSize: 70 }} />
                        </div>
                        <div className="clear">
                          <div className="text-muted">TODAY'S REVENUE</div>
                          <h2>$301</h2>
                          <p>10 orders </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Col>

                <Col span={8}>
                  <div className="gutter-box">
                    <Card bordered={false} className="bg-danger">
                      <div className="clear">
                        <div className="float-right">
                          <GiWallet style={{ fontSize: 70 }} />
                        </div>
                        <div className="clear">
                          <div className="text-muted">TODAY'S REVENUE</div>
                          <h2>$301</h2>
                          <p>10 orders </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Col>

                <Col span={8}>
                  <div className="gutter-box">
                    <Card bordered={false} className="bg-success">
                      <div className="clear">
                        <div className="float-right">
                          <GiWallet style={{ fontSize: 70 }} />
                        </div>
                        <div className="clear">
                          <div className="text-muted">TODAY'S REVENUE</div>
                          <h2>$301</h2>
                          <p>10 orders </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payments;
