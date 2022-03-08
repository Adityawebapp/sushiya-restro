import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../Header'
import swal from 'sweetalert';

import 'react-toastify/dist/ReactToastify.css';

function BankDetailsManagement() {
    const notify = () => {
        swal({
            title: "Good job!",
            text: "Profile Created Successfully!",
            icon: "success",
            button: "Aww yiss!",
          });
    }

    return (
        <>
            <Header />
            <div className="container-fluid">
           
                <div className="card bgk" >
                    <div className="card-header colorblack">
                        <b><NavLink to="/pickUpLocation" className="fa fa-angle-left mr-3 colorblack" style={{ fontSize: '20px' }} />Bank Details</b>

                    </div>

                    <div className="card-body">

                        <div className="row mt-3">
                            <div className="col-md-12">

                                <label>Account Holder Name</label>
                                <input type="text" name="acc_holder" className="form-control" />
                            </div>
                            <div className="col-md-12 mt-3">
                                <label>Account Number</label>
                                <input type="text" name="acc_number" className="form-control" />
                            </div>
                            <div className="col-md-12 mt-3">
                                <label>Retype Account Number</label>
                                <input type="text" name="tre_acc_number" className="form-control" />
                            </div>
                            <div className="col-md-12 mt-3">
                                <label>Bank IBAN Code</label>
                                <input type="email" name="iban_code" className="form-control" />
                            </div>
                            <div className="col-md-12 mt-3">
                                <label>Bank Name</label>
                                <input type="email" name="branch_name" className="form-control" />
                            </div>
                            {/* <div className="col-md-6 mt-3">
                                <label>Country</label>
                                <input type="email" name="country_id" className="form-control" />
                            </div>
                            <div className="col-md-6 mt-3">
                                <label>City</label>
                                <input type="email" name="city_id" className="form-control" />
                            </div> */}
                        </div>

                    </div>

                    <div className="card-footer">

                        <center> <button className="btn btn-outline-dark" style={{ padding: '5px 5rem' }} onClick={notify} >Save</button></center>
                    </div>
                </div>

            </div>
        </>
    )
}

export default BankDetailsManagement
