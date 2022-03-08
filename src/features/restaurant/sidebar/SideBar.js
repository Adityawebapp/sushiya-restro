import React from 'react'
import { NavLink } from 'react-router-dom'

function SideBar() {
    return (
        <>
            {/* <!-- Sidebar --> */}
            <ul className="navbar-nav bg-gradient-primary sidebar sidebarStyle sidebar-dark accordion" id="accordionSidebar">

                {/* <!-- Sidebar - Brand --> */}
                <NavLink className="sidebar-brand d-flex align-items-center justify-content-center" to="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Restaurant <sup></sup></div>
                </NavLink>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider my-0" />

                {/* <!-- Nav Item - Dashboard --> */}
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/restaurant">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></NavLink>
                </li>

                {/* <!-- Divider --> */}

                {/* <!-- Heading --> */}
               

                {/* <!-- Nav Item - Pages Collapse Menu --> */}
                <li className="nav-item">
                   <NavLink className="nav-link" to="/menuCatelog">
                        <i className="fas fa-fw fa-globe-americas"></i>
                        <span>Menu/Catelog</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Offer">
                        <i className="fas fa-fw fa-users"></i>
                        <span>Offers & Discount</span></NavLink>
                </li>
               
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Order">
                        <i className="fas fa-fw fa-motorcycle"></i>
                        <span>Order Management</span></NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link" to="/branchStaffDetails">
                        <i className="fas fa-fw fa-arrows-alt"></i>
                        <span>Branches & Staff</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/payments">
                        <i className="fas fa-fw fa-shopping-cart"></i>
                        <span>Payments</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/revenueGrowth">
                        <i className="fas fa-fw fa-money-bill-alt"></i>
                        <span>Revenue Growth</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/restaurant">
                        <i className="fas fa-fw fa-money-bill-alt"></i>
                        <span>Sub Admin</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/restaurant">
                        <i className="fas fa-fw fa-percent"></i>
                        <span>Profile</span></NavLink>
                </li>

{/* 
                <li className="nav-item">
                    <a className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-fw fa-cog"></i>
                        <span>Components</span>
                    </a>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Components:</h6>
                            <a className="collapse-item" to="buttons.html">Buttons</a>
                            <a className="collapse-item" to="cards.html">Cards</a>
                        </div>
                    </div>
                </li> */}


                {/* <!-- Divider --> */}
                {/* <hr className="sidebar-divider" /> */}

                {/* <!-- Heading --> */}
                {/* <div className="sidebar-heading">
                    Addons
                </div> */}

                {/* <!-- Nav Item - Pages Collapse Menu --> */}
                {/* <li className="nav-item">
                    <a className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapsePages"
                        aria-expanded="true" aria-controls="collapsePages">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </a>
                    <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Login Screens:</h6>
                            <a className="collapse-item" to="login.html">Login</a>
                            <a className="collapse-item" to="register.html">Register</a>
                            <a className="collapse-item" to="forgot-password.html">Forgot Password</a>
                            <div className="collapse-divider"></div>
                            <h6 className="collapse-header">Other Pages:</h6>
                            <a className="collapse-item" to="404.html">404 Page</a>
                            <a className="collapse-item" to="blank.html">Blank Page</a>
                        </div>
                    </div>
                </li> */}


                {/* <!-- Divider --> */}
                <hr className="sidebar-divider d-none d-md-block" />

                {/* <!-- Sidebar Toggler (Sidebar) --> */}
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>



            </ul>
            {/* <!-- End of Sidebar --> */}


            
        </>
    )
}

export default SideBar
