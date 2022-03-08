import React from "react";
import { Select } from "antd";

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onSearch(val) {
  console.log("search:", val);
}

export const PurchaseOrder = () => {
  return (
    <div>
      <div>
        <div className="d-flex align-items-center float-right mb-5">
          <h6 className="pt-2 pr-2">Duration </h6>
          <Select
            style={{ width: 150 }}
            optionFilterProp="children"
            onChange={onChange}
          
          >
            <Option active value="Today">Today</Option>
            <Option value="Last Week">Last Week</Option>
          </Select>
        </div>
        <div class="card-body">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Purchase Order id</th>
                <th scope="col">Created On</th>
                <th scope="col">Branch Name</th>
                <th scope="col">Requestetd By</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>

                <td>
                  <button className=" btn btn-outline-default colorblack">
                    <i className="fa fa-edit"></i>
                  </button>
                  <button className=" btn btn-outline-default colorblack">
                    <i className="fa fa-trash-alt"></i>
                  </button>
                  <button className=" btn btn-outline-default colorblack">
                    <i className="fa fa-eye"></i>
                  </button>
                  <button className=" btn btn-outline-default colorblack">
                    <i class="fas fa-print"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Purchase</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>

                <td>
                  <button className=" btn btn-outline-default colorblack">
                    <i className="fa fa-edit"></i>
                  </button>
                  <button className=" btn btn-outline-default colorblack">
                    <i className="fa fa-trash-alt"></i>
                  </button>
                  <button className=" btn btn-outline-default colorblack">
                    <i className="fa fa-eye"></i>
                  </button>
                  <button className=" btn btn-outline-default colorblack">
                    <i class="fas fa-print"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
