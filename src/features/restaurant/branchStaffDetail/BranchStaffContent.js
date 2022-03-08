import React, { useEffect } from "react";
import Footer from "../../admin/footer/Footer";
import { useState } from "react";
import $ from "jquery";
import axios from "axios";
import { Switch, Table, Tabs, Button } from "antd";

import { NavLink } from "react-router-dom";
import { PathUrl, Token, UserId } from "../../../config/Config";

const { TabPane } = Tabs;

function BranchStaffContent() {
  const token = Token().token;
  const res_id = UserId().user_id;

  const url = PathUrl().urlData.development;

  const [branch, setBranch] = useState(true);
  const [branchList, setBranchList] = useState([]);

  const [staffType, setStaffType] = useState(false);
  const [staffTypeList, setStaffTypeList] = useState([]);

  const [staff, setStaff] = useState(false);
  const [staffList, setstaffList] = useState([]);

  useEffect(() => {
    loadBranchList();
    loadStaffTypeList();
    loadStaffList();

    // $('#myTable').DataTable();
  }, []);

  function callback(key) {
    console.log(key);
  }
  const loadBranchList = async () => {
    const data = await axios
      .post(
        `${url}/branchList`,
        { res_id: res_id },
        { headers: { Authorization: "Bearer " + token } }
      )
      .then((response) => {
        const data = response.data;
        return data;
      })
      .catch((error) => {
        console.error(error);
      });
    setBranchList(data);
  };

  const branchColumns = [
    {
      title: "Name",
      dataIndex: "branch_name",
      key: "name",
      sorter: {
        compare: (a, b) => a.branch_name - b.branch_name,
        multiple: 3,
      },
    },
    {
      title: "Locality",
      dataIndex: "locality",
      key: "location",
      sorter: {
        compare: (a, b) => a.locality - b.locality,
        multiple: 3,
      },
    },
    {
      title: "City",
      dataIndex: "city_detail",
      key: "city",
      sorter: {
        compare: (a, b) => a.city_detail - b.city_detail,
        multiple: 3,
      },
      render: (city_detail) => `${city_detail.city}`,
    },
    {
      title: "Added On",
      dataIndex: "created_at",
      key: "added_on",
      sorter: {
        compare: (a, b) => a.created_at - b.created_at,
        multiple: 3,
      },
    },
    {
      title: "Timing",
      dataIndex: "start_time",
      key: "timing",
      render: (text, record) => (
        <span>
          {record.start_time}&nbsp; To&nbsp; {record.end_time}{" "}
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "approve",
      key: "status",
      sorter: {
        compare: (a, b) => a.approve - b.approve,
        multiple: 2,
      },
      render: (text, approve) => (
        <span>{{ approve } === "0" ? "Approved" : "Pending"}</span>
      ),
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "timing",
      render: (text, record) => (
        <span>
          <button
            className="fa fa-edit btn btn-outline-warning"
            id={record.id}
          ></button>{" "}
          <Switch />
        </span>
      ),
    },
  ];

  const loadStaffTypeList = async () => {
    const data = await axios
      .post(
        `${url}/staffTypeList`,
        { res_id: res_id },
        { headers: { Authorization: "Bearer " + token } }
      )
      .then((response) => {
        const data = response.data;
        return data;
      })
      .catch((error) => {
        console.error(error);
      });
    setStaffTypeList(data);
  };

  const staffTypeColumns = [
    {
      title: "Staff Type Id",
      dataIndex: "staff_type_id",
      key: "staff_type_id",
      sorter: {
        compare: (a, b) => a.staff_type_id - b.staff_type_id,
        multiple: 2,
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: {
        compare: (a, b) => a.name - b.name,
        multiple: 2,
      },
    },
    {
      title: "Status",
      dataIndex: "approve",
      key: "status",
      sorter: {
        compare: (a, b) => a.approve - b.approve,
        multiple: 2,
      },
      render: (text, approve) => (
        <span>{{ approve } === "0" ? "Approved" : "Pending"}</span>
      ),
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "timing",
      render: (text, record) => (
        <span>
          <button
            className="fa fa-edit btn btn-outline-warning"
            id={record.id}
          ></button>
        </span>
      ),
    },
  ];

  const loadStaffList = async () => {
    const data = await axios
      .post(
        `${url}/staffList`,
        { res_id: res_id },
        { headers: { Authorization: "Bearer " + token } }
      )
      .then((response) => {
        const data = response.data;
        console.log(data, "Staff List");
        return data;
      })
      .catch((error) => {
        console.error(error);
      });
    setstaffList(data);
  };

  const staffColumns = [
    {
      title: "Staff Id",
      dataIndex: "staff_id",
      key: "staff_id",
      sorter: {
        compare: (a, b) => a.staff_id - b.staff_id,
        multiple: 2,
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: {
        compare: (a, b) => a.name - b.name,
        multiple: 2,
      },
    },
    {
      title: "Staff Type",
      dataIndex: "staff_type",
      key: "staffType",
      sorter: {
        compare: (a, b) => a.staff_type - b.staff_type,
        multiple: 2,
      },
      render: (staff_type) => `${staff_type.name}`,
    },
    {
      title: "Branch Alloted",
      dataIndex: "branch",
      key: "branch",
      sorter: {
        compare: (a, b) => a.branch - b.branch,
        multiple: 2,
      },
      render: (branch) => `${branch.branch_name}`,
    },
    {
      title: "Status",
      dataIndex: "approve",
      key: "status",
      sorter: {
        compare: (a, b) => a.approve - b.approve,
        multiple: 2,
      },
      render: (text, approve) => (
        <span>{{ approve } === "0" ? "Approved" : "Pending"}</span>
      ),
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "timing",
      render: (text, record) => (
        <span>
          <button
            className="fa fa-edit btn btn-outline-warning"
            id={record.id}
          ></button>
        </span>
      ),
    },
  ];

  // For Open Branch and StaffType Modal

  const openStaffType = (e) => {
    setBranch(false);
    setStaffType(true);
    setStaff(false);

    e.target.classList.add("active");
    $("#branch").removeClass("active");
    $("#staff").removeClass("active");
  };

  const openBranch = (e) => {
    setBranch(true);
    setStaffType(false);
    setStaff(false);

    e.target.classList.add("active");
    $("#staffType").removeClass("active");
    $("#staff").removeClass("active");
  };

  const openStaff = (e) => {
    setBranch(false);
    setStaffType(false);
    setStaff(true);

    e.target.classList.add("active");
    $("#branch").removeClass("active");
    $("#staffType").removeClass("active");
  };

  return (
    <>
      {/* <!-- Content Wrapper --> */}
      <div id="content-wrapper" className="d-flex flex-column">
        <h3 className="ml-5 colorblack bold">Branch&Staff Management</h3>
        {/* <!-- Main Content --> */}

        <Tabs onChange={callback} type="card" size="large">
          <TabPane tab="Branch " key="1">
            <NavLink to="branchDetail">
              <Button
                type="primary"
                style={{ minWidth: "10%", float: "right",margin:"15px 0" }}
              >
                Add
              </Button>
            </NavLink>
            <div className="card-body">
              <Table
                dataSource={branchList}
                columns={branchColumns}
                pagination={{
                  defaultPageSize: 5,
                  showSizeChanger: true,
                  pageSizeOptions: ["05", "10", "20", "30"],
                }}
              />
            </div>
          </TabPane>
          <TabPane tab="Staff Type" key="2">
            <div>
              <Table
                dataSource={staffTypeList}
                columns={staffTypeColumns}
                pagination={{
                  defaultPageSize: 5,
                  showSizeChanger: true,
                  pageSizeOptions: ["05", "10", "20", "30"],
                }}
              />
            </div>
          </TabPane>
          <TabPane tab="Staff" key="3">
            <div>
              <Table
                dataSource={staffList}
                columns={staffColumns}
                pagination={{
                  defaultPageSize: 5,
                  showSizeChanger: true,
                  pageSizeOptions: ["05", "10", "20", "30"],
                }}
              />
            </div>
          </TabPane>
        </Tabs>

        <div id="content">
          <div class="row">
            <div class="col-lg-12">
              <div class="card mb-4">
                <div class="card-header">
                  <h3 className="ml-5 colorblack bold">
                    Branch&Staff Management
                  </h3>
                  <div className="mt-4 text-center">
                    <div class="btn-group" style={{ minWidth: "50%" }}>
                      <button
                        type="button"
                        class="btn btn-outline-warning active"
                        id="branch"
                        onClick={openBranch}
                      >
                        Branch
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-warning"
                        onClick={openStaffType}
                        id="staffType"
                      >
                        Staff Type
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-warning"
                        onClick={openStaff}
                        id="staff"
                      >
                        Staff
                      </button>
                    </div>
                    &nbsp;&nbsp;
                    {branch && (
                      <NavLink to="branchDetail">
                        <button
                          type="button"
                          class="btn btn-outline-dark"
                          style={{ minWidth: "20%", float: "right" }}
                        >
                          Add
                        </button>
                      </NavLink>
                    )}
                    {staffType && (
                      <NavLink to="staffType">
                        <button
                          type="button"
                          class="btn btn-outline-dark"
                          style={{ minWidth: "20%", float: "right" }}
                        >
                          Add
                        </button>
                      </NavLink>
                    )}
                    {staff && (
                      <NavLink to="staff">
                        <button
                          type="button"
                          class="btn btn-outline-dark"
                          style={{ minWidth: "20%", float: "right" }}
                        >
                          Add
                        </button>
                      </NavLink>
                    )}
                  </div>
                </div>
                <div className="card-body">
                  {branch && (
                    <Table
                      dataSource={branchList}
                      columns={branchColumns}
                      pagination={{
                        defaultPageSize: 5,
                        showSizeChanger: true,
                        pageSizeOptions: ["05", "10", "20", "30"],
                      }}
                    />
                  )}
                  {staffType && (
                    <Table
                      dataSource={staffTypeList}
                      columns={staffTypeColumns}
                      pagination={{
                        defaultPageSize: 5,
                        showSizeChanger: true,
                        pageSizeOptions: ["05", "10", "20", "30"],
                      }}
                    />
                  )}
                  {staff && (
                    <Table
                      dataSource={staffList}
                      columns={staffColumns}
                      pagination={{
                        defaultPageSize: 5,
                        showSizeChanger: true,
                        pageSizeOptions: ["05", "10", "20", "30"],
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- End of Main Content --> */}
        <Footer />
      </div>
    </>
  );
}

export default BranchStaffContent;
