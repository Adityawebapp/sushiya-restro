import React from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
import SushiyaLogo from "../../../img/sushiya_logo.png";
import styles from './Sidebar.module.css'


import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Sider } = Layout;

function SideBar() {
  return (
    <>
      {/* <!-- Sidebar --> 
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebarStyle sidebar-dark accordion"
        id="accordionSidebar"
      >
   
        <NavLink
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            Restaurant <sup></sup>
          </div>
        </NavLink>

        <hr className="sidebar-divider my-0" />

      <!-- Nav Item - Dashboard --> 
        <li className="nav-item active">
          <NavLink className="nav-link" to="/restaurant">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </NavLink>
        </li> 

        */}

      {/* <!-- Nav Item - Pages Collapse Menu --> 
        <li className="nav-item">
          <NavLink className="nav-link" to="/menuCatelog">
            <i className="fas fa-fw fa-globe-americas"></i>
            <span>Menu/Catelog</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Offer">
            <i className="fas fa-fw fa-users"></i>
            <span>Offers & Discount</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/Order">
            <i className="fas fa-fw fa-motorcycle"></i>
            <span>Order Management</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/branchStaffDetails">
            <i className="fas fa-fw fa-arrows-alt"></i>
            <span>Branches & Staff</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/payments">
            <i className="fas fa-fw fa-shopping-cart"></i>
            <span>Payments</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/revenueGrowth">
            <i className="fas fa-fw fa-money-bill-alt"></i>
            <span>Revenue Growth</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/restaurant">
            <i className="fas fa-fw fa-money-bill-alt"></i>
            <span>Sub Admin</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/restaurant">
            <i className="fas fa-fw fa-percent"></i>
            <span>Profile</span>
          </NavLink>
        </li>*/}

      <Sider
        width={300}
        theme="light"
        style={{
          overflow: "auto",
          height: "100vh",

       
       
        }}
      >
        <div className="logo text-center mb-5">
          <Link to="#" className="navbar-brand text-center">
            <img
              src={SushiyaLogo}
              alt=""
              width="100"
              height="84"
              className="d-inline-block align-text-top"
            />
          </Link>
        </div>

        <Menu mode="inline">
          <Menu.Item className={styles.paddingLeft} key="1" icon={<UserOutlined />}>
            <Link  to="/restaurant"> Deshboard </Link>
          </Menu.Item>
          <Menu.Item className={styles.paddingLeft}  key="2" icon={<VideoCameraOutlined />}>
            <Link to="/menuCatelog"> Menu/Catalog </Link>
          </Menu.Item>
          <Menu.Item className={styles.paddingLeft} key="3" icon={<UploadOutlined />}>
            <Link to="/offer"> Offer & Discount </Link>
          </Menu.Item>
          <Menu.Item className={styles.paddingLeft} key="4" icon={<BarChartOutlined />}>
            <NavLink to="/Order">Order Management</NavLink>
          </Menu.Item>
          <Menu.Item className={styles.paddingLeft} key="5" icon={<CloudOutlined />}>
            <NavLink to="/branchStaffDetails"> Branches & Staff</NavLink>
          </Menu.Item>
          <Menu.Item className={styles.paddingLeft} key="6" icon={<AppstoreOutlined />}>
            <NavLink to="/payments">Payments</NavLink>
          </Menu.Item>
          <Menu.Item  className={styles.paddingLeft} key="7" icon={<TeamOutlined />}>
            <NavLink to="/revenueGrowth"> Revenue Growth </NavLink>
          </Menu.Item>
          <Menu.Item className={styles.paddingLeft} key="8" icon={<ShopOutlined />}>
            <NavLink to="/subadmin"> Sub Admin</NavLink>
          </Menu.Item>
          <Menu.Item className={styles.paddingLeft} key="9" icon={<ShopOutlined />}>
            <NavLink to="/profile">Profile</NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
}

export default SideBar;
