import ResMainHeader from "../../ResMainHeader";
import SideBar from "../../sidebar/SideBar";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { PathUrl, Token, UserId } from "../../../../config/Config";
import React, {useState } from "react";
import { useForm } from "react-hook-form";
import { Form, TimePicker, Button } from 'antd';

import LocationSearchInput from "../../../GoogleMap/LocationSearchInput";


function BranchContent() {
  const { register, handleSubmit } = useForm();
  const [randomBranchId, setRandomBranchId] = useState(Math.floor((Math.random() * 99999999) + 10000000))
//   let [randomBranchId, setRandomBranchId] = useState(Math.floor(Math.random() * 99999999) + 10000000);
  console.log(setRandomBranchId)

  // Token ,UserId and Url
  // For Country List


  const token = Token().token;
  const res_id = UserId().user_id;
  const url = PathUrl().urlData.development;

  const onSubmit = (data) => {
    const dd = new FormData();
    let latval = document.getElementById("lat").value;
    let lngval = document.getElementById("lng").value;
    let country = document.getElementById("country").value;
    let city = document.getElementById("city").value;
    let addressval = document.getElementById("address").value;

    dd.append("lat", latval);
    dd.append("lng", lngval);
    dd.append("address", addressval);
    dd.append("country", country);
    dd.append("city", city);
    dd.append("branch_id", randomBranchId);
    dd.append("branch_name", data.branch_name);
    dd.append("pin_code", data.pin_code);
    dd.append("locality", data.locality);
    dd.append("start_time", data.start_time);
    dd.append("end_time", data.end_time);
    dd.append("res_id", res_id);

    axios
      .post(`http://52.91.235.134/api/branch`, dd, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        console.log(response.data, "dish ka return data");
      })
      .catch((response) => {
        console.error(response.error);
      });
    console.log(data, "8888888888888888888");
  };


  const onFinish = (fieldsValue) => {
    // Should format date value before submit.
    
    const values = {
  
      'time': fieldsValue['time'].format('HH:mm:ss'),
    };
    console.log('Received values of form: ', values);
  };
 

  return (
    <>
      <ResMainHeader />
      <div id="wrapper">
        <SideBar />
        <div className="container">
          <div className="row">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card col-md-12">
                <NavLink
                   to="branchDetail"
                  className="fa fa-angle-left colorblack card-header bold text-decoration-none"
                >
                  Add Branch
                </NavLink>

                {/* location  */}


                <div className="card-body">
                  <div className="row">
                  <div className="col-md-12 col-lg-12 col-sm-12 mb-3">
                      <label className="colorblack bold">Enter Address:</label>
                      <LocationSearchInput />


                      {/* <input type="text" className="from-control" /> */}
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-12">
                      <label className="colorblack bold">Branch Id:</label>
                      <input
                        className="form-control"
                        name="branch_id"
                        type="number"
                        value={randomBranchId}
                        {...register("branch_id")}
                        disabled
                      />
                      {/* <input type="text" className="from-control" /> */}
                    </div>

                    <div className="col-md-6 col-lg-6 col-sm-12">
                      <label className="colorblack bold">Branch Name:</label>
                      <input
                        className="form-control"
                        name="branch_name"
                        type="text"
                        {...register("branch_name", { required: false })}
                      />

                      {/* <input type="text" className="from-control" /> */}
                    </div>

                    <div className="col-md-6 col-lg-6 col-sm-12 mt-3">
                      <label className="colorblack bold">Pin Code:</label>
                      <input
                        className="form-control"
                        name="pin_code"
                        type="number"
                        {...register("pin_code", { required: false })}
                      />

                      {/* <input type="text" className="from-control" /> */}
                    </div>

                    <div className="col-md-6 col-lg-6 col-sm-12 mt-3">
                      <label className="colorblack bold">Locality:</label>
                      <input
                        className="form-control"
                        name="locality"
                        type="text"
                        {...register("locality", { required: false })}
                      />
                    </div>

                    <div className="col-md-6 col-lg-6 col-sm-12 mt-3">
                      <label className="colorblack bold">Start Time</label>
                      <br />
                      <input
                        type="time"
                        className="form-control"
                        name="start_time"
                        {...register("start_time", { required: false })}
                      />

                      {/* <input type="text" className="from-control" /> */}
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-12 mt-3">
                      <label className="colorblack bold">End Time</label>
                      <br />
                      <input
                        type="time"
                        className="form-control"
                        name="end_time"
                        {...register("end_time", { required: false })}
                      />

                      {/* <input type="text" className="from-control" /> */}
                    </div>
                  </div>
                </div>
                <div className="card-footer text-center">
                  {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
                  <button type="submit" className="btn btn-primary ">
                    Add Branch
                  </button>
                </div>
              </div>
            </form>
          </div>   
 
        </div>
        
      </div>




      <Form name="time_related_controls"  onFinish={onFinish}>
      
     
      <Form.Item name="time" label="TimePicker" >
        <TimePicker />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
   
    </>
  );
}

export default BranchContent;
