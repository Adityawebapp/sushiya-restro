import React from "react";

import { Card, Col, Row, PageHeader, Descriptions, Layout, Rate } from "antd";
import { GiWallet } from "react-icons/gi";
import styles from './payment.module.css';

const PaymentMainpage = () => {
  return (
    <>
      <Layout className="site-layout" >
        <div className="site-page-header-ghost-wrapper">
          <PageHeader
            ghost={false}
            onBack={() => window.history.back()}
            title="MY PAYMENTS"
          >
            <hr />
            <Descriptions size="small" column={3}>
              <Descriptions.Item label="Restaurant Name">
                Punjabi Dhaba
              </Descriptions.Item>
              <Descriptions.Item label="Location">Lili Qu</Descriptions.Item>
              <Descriptions.Item label="Effective Time">
                2017-10-10
              </Descriptions.Item>
              <Descriptions.Item label="Varified">
                <a>yes</a>
              </Descriptions.Item>
              <Descriptions.Item label="Rating">
                <Rate />
              </Descriptions.Item>
            </Descriptions>
          </PageHeader>
        </div>


        <div className="my-4">
        <h5 className={styles.textStart}>TOTAL BUSSINESS</h5>
        <Row gutter={16}>
          <Col xs={24} sm={12} lg={8} className="custom-statcards">
            <Card
              bordered={false}
              bodyStyle={{ padding: "20px" }}
            >
              <div className="d-flex   justify-content-between">
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
          </Col>
          <Col xs={24} sm={12} lg={8} className="custom-statcards">
            <Card
              bordered={false}
              bodyStyle={{ padding: "20px" }}
            >
              <div className="d-flex  stats justify-content-between">
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
          </Col>
          <Col xs={24} sm={12} lg={8} className="custom-statcards">
            <Card
              bordered={false}
              bodyStyle={{ padding: "20px" }}
            >
              <div className="d-flex  stats justify-content-between">
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
          </Col>
        </Row>
        </div>
       
        <div className="my-4">
        <h5 className={styles.textStart}>PAYMENTS</h5>

        <Row gutter={16}>
          <Col xs={24} sm={12} lg={8} className="custom-statcards">
            <Card
              bordered={false}
              className="sale"
              bodyStyle={{ padding: "20px" }}
            >
              <div className="d-flex  stats justify-content-between">
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
          </Col>
          <Col xs={24} sm={12} lg={8} className="custom-statcards">
            <Card
              bordered={false}
              className="sale"
              bodyStyle={{ padding: "20px" }}
            >
              <div className="d-flex  stats justify-content-between">
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
          </Col>
          <Col xs={24} sm={12} lg={8} className="custom-statcards">
            <Card
              bordered={false}
              className="sale"
              bodyStyle={{ padding: "20px" }}
            >
              <div className="d-flex  stats justify-content-between">
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
          </Col>
        </Row>
        </div>

        <div className="my-4">
        <h5 className={styles.textStart}>CANCELLATIONS</h5>
        <Row gutter={16}>
          <Col xs={24} sm={12} lg={8} className="custom-statcards">
            <Card
              bordered={false}
              className="sale"
              bodyStyle={{ padding: "20px" }}
            >
              <div className="d-flex  stats justify-content-between">
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
          </Col>
          <Col xs={24} sm={12} lg={8} className="custom-statcards">
            <Card
              bordered={false}
              className="sale"
              bodyStyle={{ padding: "20px" }}
            >
              <div className="d-flex  stats justify-content-center">
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
          </Col>
          <Col xs={24} sm={12} lg={8} className="custom-statcards">
            <Card
              bordered={false}
              className="sale"
              bodyStyle={{ padding: "20px" }}
            >
              <div className="d-flex  stats justify-content-center">
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
          </Col>
        </Row>
        </div>



      </Layout>
    </>
  );
};

export default PaymentMainpage;
