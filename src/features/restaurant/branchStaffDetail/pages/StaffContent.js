import ResMainHeader from "../../ResMainHeader"
import SideBar from "../../sidebar/SideBar"
import { NavLink } from 'react-router-dom';
import {PathUrl,Token,UserId} from '../../../../config/Config'

import axios from 'axios';
import { useEffect, useState } from "react";

function StaffContent() {

    // Token ,UserId and Url
    const token = Token().token;
    const res_id = UserId().user_id;
    const url = PathUrl().urlData.development;

    // For Random BranchId 

    let [randomBranchId, setRandomBranchId] = useState(Math.floor(Math.random() * 99999999) + 10000000);
    const [selectedImage, setSelectedImage] = useState();
    const [branchList, setBranchList] = useState([])
    const [staffTypeList, setStaffTypeList] = useState([])

console.log(setRandomBranchId)
    useEffect(() => {
        loadStaffType()
        loadBranch()
    }, [])

    const loadStaffType = async () => {
        const data = await axios.post(`${url}/staffTypeList`, { res_id: res_id }, { headers: { Authorization: 'Bearer ' + token } })
            .then((response) => {
                const data = response.data;
                return data;
            })
            .catch((error) => {
                console.error(error);
            });
        setStaffTypeList(data);
    }


    const loadBranch = async () => {
        const data = await axios.post(`${url}/branchList`, { res_id: res_id }, { headers: { Authorization: 'Bearer ' + token } })
            .then((response) => {
                const data = response.data;
                return data;
            })
            .catch((error) => {
                console.error(error);
            });
        setBranchList(data);
    }


    const [staff, setStaff] = useState({
        staffType_id: '',
        res_id: res_id,
        branch_id: '',
        name: '',
        address: '',
        passcode: '',
        document_image: '',
        staff_id: randomBranchId,

    });

    const staffChange = e => {

        let name = e.target.name;
        let value = e.target.value;
        staff[name] = value;

        setStaff(staff);

    };



    const onSubmit = e => {
        e.preventDefault();
        console.log(staff, "from submit")
        // Send a POST request

        axios.post("http://localhost:8000/api/staff", staff, { headers: { Authorization: 'Bearer ' + token } })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });

    };


    // This function will be triggered when the file field change
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
            staff['document_image'] = e.target.files[0]
            console.log(e.target.files[0])
            console.log(staff)

        }
    };

    // This function will be triggered when the "X" button is clicked
    const removeSelectedImage = () => {
        setSelectedImage();
        staff['document_image'] = ''
        setStaff(staff);


    };


    return (
        <>
            <ResMainHeader />
            <div id="wrapper">
                <SideBar />
                <div className="container">
                    <div className="row card">
                        <form onSubmit={onSubmit}>

                            <div class=" card-header col-md-12" >
                                <NavLink to="/branchStaffDetails" className="fa fa-angle-left colorblack bold text-decoration-none"  >  Add Staff </NavLink>
                            </div>
                            <div class="card-body">
                                <div className="row">

                                    <div className="col-md-6 col-lg-6 col-sm-12">
                                        <label className="colorblack bold">Staff  Id:</label>
                                        <input className="form-control" type="text" name="staff__id" value={randomBranchId} />


                                    </div>

                                    <div className="col-md-6 col-lg-6 col-sm-12">
                                        <label className="colorblack bold"> Name:</label>
                                        <input className="form-control" type="text" name="name" onChange={staffChange} />
                                    </div>

                                    <div className="col-md-6 col-lg-6 col-sm-12 mt-3">
                                        <label className="colorblack bold"> Staff Type:</label>
                                        <select className="form-control" name="staffType_id" onChange={staffChange}>
                                      <option>---Select Staff Type---</option>
                                      { /*        {
                                                    staffTypeList.map((value) => (
                                                        <option value={value.id}>{value.name}</option>
                                                    ))

                                                }     */  }
                                        </select>
                                    </div>

                                    <div className="col-md-6 col-lg-6 col-sm-12 mt-3">
                                        <label className="colorblack bold"> Branch Name:</label>
                                        <select className="form-control" name="branch_id" onChange={staffChange}>
                                            <option>---Select Branch ---</option>
                                                 { /*    {
                                                    branchList.map((value) => (
                                                        <option value={value.id}>{value.branch_name}</option>
                                                    ))

                                                }  */  }
                                        </select>
                                    </div>

                                    <div className="col-md-6 col-lg-6 col-sm-12 mt-3">
                                        <label className="colorblack bold">Staff Address:</label>
                                        <input className="form-control" type="text" name="address" onChange={staffChange} />

                                    </div>
                                    <div className="col-md-6 col-lg-6 col-sm-12 mt-3">
                                        <label className="colorblack bold">Set Passcode:</label>
                                        <input className="form-control" type="text" name="passcode" onChange={staffChange} />

                                    </div>

                                    <div className="col-md-6 col-lg-6 col-sm-12 mt-4">
                                        <label className="colorblack bold">Upload Id  :&nbsp;&nbsp;</label>

                                        <input
                                            accept="image/*"
                                            type="file"
                                            name="document_image"
                                            onChange={imageChange}
                                        />
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-sm-12 mt-4">
                                        {selectedImage && (

                                            <div className="col-md-12 col-lg-12 " >
                                                <button onClick={removeSelectedImage} className="btn btn-sm mr-4" style={{ float: 'right', color: 'black', fontWeight: 'bolder' }}>
                                                    X
                                                </button><br />
                                                <img
                                                    src={URL.createObjectURL(selectedImage)}
                                                    alt="document_image"
                                                    style={{ maxWidth: '80%', minWidth: '80%', maxHeight: '130px' }}
                                                />

                                            </div>
                                        )}


                                    </div>

                                </div>
                            </div>
                            <div class="card-footer text-center">
                                {/* <button ="button" class="btn btn-secondary" data-dismiss="modal">Close</button> */}
                                <button type="submit" className="btn btn-primary ">Add Staff </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StaffContent
