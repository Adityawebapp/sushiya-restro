import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Link, } from "react-router-dom";
import { Token, PathUrl } from "../../../config/Config";
import UserMap from './UserMap/UserMap'

import { Layout } from 'antd';
const { Content } = Layout;



function PageContent() {
  const token = Token().token;
  const url = PathUrl().urlData.development;

  const [country, setCountry] = useState([]);
  
  const loadCountry = async () => {
    const data = await axios
      .get(`${url}/country`, { headers: { Authorization: "Bearer " + token } })
      .then((response) => {
        const data = response.data;
        return data;
      })
      .catch((error) => {
        console.error(error);
      });
    setCountry(data);
  };

  
  useEffect(() => {
    loadCountry();
  }, []);

  return (
    <>
    <Layout className="site-layout" >
    
     





      <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        {/* <div className="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
    <NavLink to="/" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
            className="fas fa-download fa-sm text-white-50"></i> Generate Report</NavLink>
</div> */}

        {/* <!-- Content Row --> */}
        <div className="row mt-4">
          {/* <!-- Earnings (Monthly) Card Example --> */}
          <div className="col-xl-4 col-md-4 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Total Successful Order
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      200
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Earnings (Monthly) Card Example --> */}
          <div className="col-xl-4 col-md-4 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                      Total On-Going Order
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      2
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Earnings (Monthly) Card Example --> */}
          <div className="col-xl-4 col-md-4 mb-4">
            <div className="card border-left-info shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                      Total Cancelled Order
                    </div>
                    <div className="row no-gutters align-items-center">
                      <div className="col-auto">
                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                          20
                        </div>
                      </div>
                      {/* <div className="col">
                                <div className="progress progress-sm mr-2">
                                    <div className="progress-bar bg-info" role="progressbar"
                                        style={{width:'50%'}} aria-valuenow="50" aria-valuemin="0"
                                        aria-valuemax="100"></div>
                                </div>
                            </div> */}
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Pending Requests Card Example --> */}
          <div className="col-xl-2 col-md-2 mb-4"></div>
          <div className="col-xl-4 col-md-4 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                      Total Revenue
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      $200
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-md-4 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                      Total Review & Rating
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      1800
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-comments fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================ */}

        <div className="select_status">
          <div className="row text-center">
            <div className="col-4">
              <select class=" form-control" aria-label="Default select example">
                <option selected>User</option>
                <option selected>Restaurant</option>
                <option selected>On-Going Order</option>
                <option selected>Driver</option>
              </select>
            </div>
            <div className="col-4">
              <select class="form-control" aria-label="Default select example">
                <option selected>choose option</option>
               {/*    {country.map((value) => (
                  <option value={value.id}>{value.country}</option>
                ))}  */ }
              </select> 
            </div>
            <div className="col-4">
              <select class="form-control" aria-label="Default select example">
                <option selected>Active</option>
                <option >Deactive</option>
              </select>
            </div>
          </div>
        </div>

        {/* ================================================ */}
        <UserMap />
      </div>

      
     
    
    </Layout>
    </>
  );
}

export default PageContent;
