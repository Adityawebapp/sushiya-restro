import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Table, Space, Switch, Select } from "antd";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import axios from "axios";
import { UserId, Token } from "../../../../config/Config";

const Option = Select;

const columns = [
  {
    title: "Product",
    dataIndex: "name",
    key: "product",
  },
  {
    title: "Add date",
    dataIndex: "created_at",
    key: "created_at",
  },
  {
    title: "Quentity",
    dataIndex: "purchase_measure",
    key: "purchase_measure",
  },

  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Action",
    dataIndex: "sss",
    key: "sss",
    render: (text, record) => (
      <Space size="middle">
        <FiEdit size="25" />
        <AiOutlineDelete size="28" />
        <Switch defaultChecked size="large" />
      </Space>
    ),
  },
];

export const MyListing = () => {
  const res_id = UserId().user_id;
  const token = Token().token;
  const [dataTable, setdataTable] = useState([]);

  useEffect(() => {
    dishData();
  }, []);

  const dishData = () => {
    return axios
      .post(
        "http://52.91.235.134/api/ApprovedDish",

        { id: res_id },
        {
          headers: { Authorization: "Bearer " + token },
        }
      )
      .then((response) => {
        console.log(response.data, "sdddddddddddddddddddsdfsfd");
        setdataTable(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onChange = (data) => {
    console.log(data, "chanage adt");
  };

  return (
    <>
      <div className="row mt-2">
        <div className="col-md-6 ">
          {/* <div class="btn-group " style={{ minWidth: '30%' }}>
                                                    

                                                </div> */}

          <div className="dropdown show">
            <NavLink
              className="btn btn-secondary dropdown-toggle"
              to="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ backgroundColor: "black", color: "white" }}
            >
              ADD ITEM/PRODUCT
            </NavLink>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <Link className="dropdown-item" to="/menuCatelog/dish">
                ADD Dish
              </Link>
              <Link className="dropdown-item" to="/menuCatelog/combo">
                ADD Combo
              </Link>
              <Link className="dropdown-item" to="/menuCatelog/ingredient">
                ADD Ingredient
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-end">
          <div className="d-flex align-items-center float-right mb-5">
            <h6 className="pt-2 pr-2">Duration </h6>
            <Select style={{ width: 150 }} onChange={onChange}>
              <Option value="Reject">Reject</Option>
              <Option value="Approve">Approve</Option>
              <Option value="Pending">Pending</Option>
            </Select>
          </div>
        </div>
      </div>
      <div>
        <Table
          dataSource={dataTable}
          columns={columns}
          pagination={{
            defaultPofferSize: 5,
            showSizeChanger: true,
            pofferSizeOptions: ["05", "10", "20", "30"],
          }}
        />
      </div>
    </>
  );
};
