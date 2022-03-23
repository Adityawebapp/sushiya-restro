import React from "react";

import {
  Select,
  Row,
  Col,
  Space,
  Statistic,
  Card,
  Button,
  Rate,
  Layout,
  PageHeader,
  Descriptions,
} from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
const { Option } = Select;

const RevenueMainPage = () => {
  return (
    <>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>




        <div className="site-page-header-ghost-wrapper">
          <PageHeader
            ghost={false}
            onBack={() => window.history.back()}
            title="Revenue Growth"
          
            
          >
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





      
      </Layout>
    </>
  );
};

export default RevenueMainPage;
