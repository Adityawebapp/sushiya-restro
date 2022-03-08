import React, { useState } from "react";
import Header from "../firstLogin/Header";
import $, { data } from "jquery";
import { NavLink } from "react-router-dom";
import SingleDemoImage from "../../../img/singleDemoImage.png";
import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";
import SidePanelContent from "../firstLogin/SidePanelContent";
import swal from "sweetalert";
import { Button, Select } from "antd";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Checkbox, Row, Col } from "antd";

const { Option } = Select;

function RestaurentDetailsManagement() {
  const history = useHistory();

 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [pickUpLocation, setPickUpLocation] = useState(true);
  const [restaurantDetail, setRestaurantDetail] = useState(false);
  const [bankDetail, setBankDetail] = useState(false);

  const [sundayTime, setSundayTime] = useState(false);
  const [weeklydata, setWeelydata] = useState({
    day: "",
    sundayStart: "",
    sundayEnd: "",
  });

  // for sunday
  function sundayChecbox(checkedValues) {
    console.log(checkedValues);
    if (checkedValues["0"] === "sunday") {
      setSundayTime(true);
      weeklydata["day"] = "sunday";
      setWeelydata(weeklydata);
      console.log(weeklydata, "andar");
    }
    if (checkedValues.length <= "0") {
      setSundayTime(false);
      weeklydata["day"] = "";
      weeklydata["sundayStart"] = "";
      weeklydata["sundayEnd"] = "";
      setWeelydata(weeklydata);
      console.log(weeklydata, "else part");
    }
  }

  console.log(weeklydata, "bahar");
  const handleDate = (e) => {
    const newdata = { ...weeklydata };
    newdata[e.target.id] = e.target.value;
    setWeelydata(newdata);
  };

  // for monday
  const [mondayTime, setMondayTime] = useState(false);
  const [mondaydata, setMondaydata] = useState({
    day: "",
    sundayStart: "",
    sundayEnd: "",
  });

  // for sunday
  function mondayChecbox(checkedValues) {
    console.log(checkedValues);
    if (checkedValues["0"] === "sunday") {
      setMondayTime(true);
      mondaydata["day"] = "sunday";
      setMondaydata(mondaydata);
      console.log(mondaydata, "andar");
    }
    if (checkedValues.length <= "0") {
      setMondayTime(false);
      mondaydata["day"] = "";
      mondaydata["sundayStart"] = "";
      mondaydata["sundayEnd"] = "";
      setMondaydata(mondaydata);
      console.log(mondaydata, "else part");
    }
  }

  console.log(mondaydata, "bahar");
  const Mondaydate = (e) => {
    const newdata = { ...mondaydata };
    newdata[e.target.id] = e.target.value;
    setMondaydata(newdata);
  };

  const PickupLocation = () => {
    setPickUpLocation(false);
    setRestaurantDetail(true);
  };

  const bankLocation = () => {
    setPickUpLocation(false);
    setRestaurantDetail(false);
    setBankDetail(true);
  };

  // Payload data and url to upload files
  const getUploadParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };

  // Return the current status of files being uploaded
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };

  // Return array of uploaded files after submit button is clicked
  //   const handleSubmit = (files, allFiles) => {
  //     console.log(files.map((f) => f.meta));
  //     allFiles.forEach((f) => f.remove());
  //   };

  const onSubmit = (data) => console.log(data);

  //   function preview_image(event) {
  //     var total_file = event.target.files.length;
  //     for (var i = 0; i < total_file; i++) {
  //       $("#image_preview").append(
  //         "<img class='col-md-3  demoImage rounded-circle'  src='" +
  //           URL.createObjectURL(event.target.files[i]) +
  //           "'><br>"
  //       );
  //     }
  //   }

  function preview_image2(event) {
    var total_file = event.target.files.length;
    for (var i = 0; i < total_file; i++) {
      $("#image_preview2").append(
        "<img class='col-md-3  demoImage '  src='" +
          URL.createObjectURL(event.target.files[i]) +
          "'><br>"
      );
    }
  }

  function preview_image3(event) {
    for (var i = 0; i < event.target.files.length; i++) {
      $("#image_preview3").append(
        "<img class='col-md-3  demoImage '  src='" +
          URL.createObjectURL(event.target.files[i]) +
          "'><br>"
      );
    }
  }

  // const notify = () => {
  //   swal({
  //     title: "Good job!",
  //     text: "Profile Created Successfully!",
  //     icon: "success",
  //     button: "Aww yiss!",
  //   });
  // };

  const [menuItem, setMenuItem] = useState({});
  const [categoryItem, setCategoryItem] = useState({});

  const selectCategories = (checkedValues) => {
    setCategoryItem(checkedValues);
    console.log("checked = ", checkedValues);
  };

  const selectMenuItem = (checkedValues2) => {
    setMenuItem(checkedValues2);
    console.log("checked = ", checkedValues2);
  };
  const servicesDelivery = (checkedValues3) => {
    console.log("checked = ", checkedValues3);
  };

  return (
    <>
      <Header />

      <form onSubmit={handleSubmit(onSubmit)}>
        {pickUpLocation && (
          <div className="container-fluid pl-0">
            <div className="row">
              {/* For SidePanel  */}
              <SidePanelContent />

              {/* For Main Content  */}
              <div className="col-md-6 col-sm-8">
                <div
                  className="border shadow"
                  style={{
                    margin: "2rem 3rem 0rem 3rem",
                  }}
                >
                  <ul
                    className="nav nav-pills nav-justified"
                    id="ex1"
                    role="tablist"
                    style={{ margin: "2rem 0 2rem 0", fontSize: "30px" }}
                  >
                    <li className="nav-item" role="presentation">
                      <b>PICKUP LOCATION</b>
                    </li>
                  </ul>

                  <div className="row my-5 justify-content-center">
                    <div className="col-md-10 mb-3">
                      <label>Enter Pincode</label>
                
                      <input
                        type="number"
                        className="form-control"
                        {...register("pincode", { required: true })}
                      />
                    </div>
                    <div className="col-md-10">
                      <label>Restaurant Contact Address</label>
                      <input
                        type="text"
                        {...register("address")}
                        className="form-control"
                      />
                      {errors.address && "address is required"}
                    </div>
                    <div className="col-md-10 mt-4">
                      <div className="form-row justify-content-between w-100">
                        <div className="col">
                          <label>Country</label>
                          <select
                            className="form-control"
                            {...register("country")}
                          >
                            <option value="Noida">UK</option>
                            <option value="Moradabad">iceland</option>
                            <Option value="Delhi">India</Option>
                          </select>
                        </div>
                        <div className="col ">
                          <label>City</label>
                          <select
                            className="form-control"
                            {...register("city")}
                          >
                            <option active value="Noida">
                              Noida
                            </option>
                            <option value="Moradabad">Moradabad</option>
                            <Option value="Delhi">Delhi</Option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-10 mt-3">
                      <Button onClick={PickupLocation}>Next</Button>
                    </div>
                  </div>
                  <div
                    className="tab-content"
                    style={{ margin: "0rem 5rem 0rem 5rem" }}
                  >
                    <div
                      className="tab-pane fade show active"
                      id="pills-login"
                      role="tabpanel"
                      aria-labelledby="tab-login"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* second form   */}

        {restaurantDetail && (
          <div className="container">
            <div className="card bgk">
              <div className="card-header colorblack">
                <b>
                  <NavLink
                    to="/pickUpLocation"
                    className="fa fa-angle-left mr-3 colorblack"
                    style={{ fontSize: "20px" }}
                  />
                  Restaurant Details
                </b>
                <span style={{ marginLeft: "10rem" }}>
                  Add Restaurant Images
                </span>
              </div>

              <div className="card-body">
                <div className="row">
                  <Dropzone
                    getUploadParams={getUploadParams}
                    onChangeStatus={handleChangeStatus}
                    // onSubmit={handleSubmit}
                    accept="image/*"
                  />
                </div>
                <div className="row mt-5">
                  <div className="col-md-6">
                    <label>Restaurant Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      {...register("restaurantName", {
                        required: true,
                        maxLength: 20,
                      })}
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Restaurant Contact Address</label>
                    <input
                      type="text"
                      name="address"
                      className="form-control"
                      {...register("restaurantAddress", {
                        required: true,
                        maxLength: 20,
                      })}
                    />
                  </div>
                  <div className="col-md-6 mt-3">
                    <label>Email Id</label>
                    <input
                      type="email"
                      className="form-control"
                      {...register("restaurantEmailId")}
                    />
                  </div>
                </div>
              </div>
              <div className="card-header colorblack">
                <b>
                  <i
                    className=" mr-3 colorblack"
                    style={{ fontSize: "20px" }}
                  ></i>
                  Restaurant Verification
                </b>
              </div>
              <div className="row mt-5 card-body">
                <div className="col-md-12 d-flex justify-content-center">
                  <div className="col-md-2 ">
                    <label>
                      Choose Document
                      <br />
                      (Proof Of Bussiness)
                    </label>
                  </div>
                  <div className="col-md-2">
                    <select class="form-control" {...register("chooseDocs")}>
                      <option disabled>Select Items</option>
                      <option value="one">one</option>
                      <option value="two">two</option>
                      <option value="three">three</option>.
                    </select>
                  </div>
                  <div className="col-md-2 ">
                    <label>
                      upload Document
                      <br />
                      (Proof Of Bussiness)
                    </label>
                  </div>

                  <div className="col-md-2 ">
                    <label htmlFor="document" id="">
                      <img src={SingleDemoImage} width="42px" alt="hsdf" />
                    </label>
                    <input
                      type="file"
                      id="document"
                      name="upload_file[]"
                      onChange={preview_image2}
                      style={{ visibility: "hidden" }}
                    />

                    <div
                      id="image_preview2"
                      className="d-flex justify-content-center"
                    ></div>
                  </div>

                  <div className="col-md-2 ">
                    <label>upload Picture</label>
                  </div>
                  <div className="col-md-2 ">
                    <label htmlFor="document2" id="document2">
                      <img
                        src={SingleDemoImage}
                        className=""
                        width="42px"
                        alt="img "
                      />
                    </label>
                    <input
                      type="file"
                      id="document2"
                      name="upload_file[]"
                      onChange={preview_image3}
                      style={{ visibility: "hidden" }}
                    />
                    <div
                      id="image_preview3"
                      className="d-flex justify-content-center"
                    ></div>
                  </div>
                </div>
              </div>

              <div className="menu_items card-header colorblack">
                <h2>Menu Items</h2>
                <Checkbox.Group
                  style={{ width: "100%" }}
                  onChange={selectMenuItem}
                >
                  <Row>
                    <Col span={2}>
                      <Checkbox value="Breackfast">Breackfast</Checkbox>
                    </Col>
                    <Col span={2}>
                      <Checkbox value="Lunch">Lunch</Checkbox>
                    </Col>
                    <Col span={2}>
                      <Checkbox value="Snacks">Snacks</Checkbox>
                    </Col>
                    <Col span={2}>
                      <Checkbox value="Dinner">Dinner</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </div>

              <div className="Categories_items card-header colorblack">
                <h2>Categories</h2>
                <Checkbox.Group
                  style={{ width: "100%" }}
                  onChange={selectCategories}
                >
                  <Row>
                    <Col span={2}>
                      <Checkbox value="Indian">Indian</Checkbox>
                    </Col>
                    <Col span={2}>
                      <Checkbox value="Thai">Thai</Checkbox>
                    </Col>
                    <Col span={2}>
                      <Checkbox value="Mexican">Mexican</Checkbox>
                    </Col>
                    <Col span={2}>
                      <Checkbox value="Chinese">Chinese</Checkbox>
                    </Col>
                    <Col span={2}>
                      <Checkbox value="Continental">Continental</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </div>

              <div className="row card-body">
                <div className="col-md-12 d-flex justify-content-center">
                  <div className="col-md-2"></div>
                </div>
              </div>

              <div className="card-header colorblack">
                <b>
                  <i
                    className=" mr-3 colorblack"
                    style={{ fontSize: "20px" }}
                  ></i>
                  Categories
                </b>
              </div>
              <div className="row card-body">
                <div className="col-md-12 d-flex justify-content-center">
                  <div className="col-md-2"></div>
                </div>
              </div>

              <div className="card-header colorblack">
                <div className="row">
                  <div className="col-md-6">
                    <b>
                      <i
                        className=" mr-3 colorblack"
                        style={{ fontSize: "20px" }}
                      ></i>
                      Enter Bussiness Days
                    </b>
                  </div>
                  <div className="col-md-6">
                    <b>
                      <i
                        className=" mr-3 colorblack"
                        style={{ fontSize: "20px" }}
                      ></i>
                      Enter Bussiness Hours
                    </b>
                  </div>
                </div>
              </div>
              <div className="row card-body">
                {/* for sunday starting */}
                <div className="col-md-6 d-flex ">
                  <div class="form-check form-switch">
                    <Checkbox.Group
                      style={{ width: "100%" }}
                      onChange={mondayChecbox}
                    >
                      <Checkbox value="sunday">sunday</Checkbox>
                    </Checkbox.Group>
                  </div>
                </div>
                <div className="col-md-6 d-flex ">
                  {mondayTime && (
                    <div>
                      <label class="form-check-label" htmlFor="fromsunday">
                        From :
                      </label>
                      &nbsp;&nbsp;
                      <input
                        type="time"
                        id="mondayStart"
                        name="mondayStart"
                        value={weeklydata.sundayStart}
                        onChange={Mondaydate}
                      ></input>
                      &nbsp;&nbsp;
                      <label className="form-check-label" htmlFor="tosunday">
                        To :
                      </label>
                      &nbsp;&nbsp;
                      <input
                        type="time"
                        id="sundayEnd"
                        name="sundayEnd"
                        value={weeklydata.sundayEnd}
                        onChange={Mondaydate}
                      ></input>
                      &nbsp;&nbsp;
                    </div>
                  )}
                </div>
                {/* for sunday endikng */}

                <div className="col-md-6 d-flex mt-3 ">
                  <div className="form-check form-switch">
                    <Checkbox.Group style={{ width: "100%" }}>
                      <Checkbox value="tuesday">Tuesday</Checkbox>
                    </Checkbox.Group>
                  </div>
                </div>
                <div className="col-md-6 d-flex mt-3 ">
                  <label className="form-check-label" htmlFor="fromtuesday">
                    From :{" "}
                  </label>
                  &nbsp;&nbsp;
                  <input type="time" id="fromtuesday" name="from"></input>
                  &nbsp;&nbsp;
                  <label className="form-check-label" htmlFor="totuesday">
                    To :{" "}
                  </label>
                  &nbsp;&nbsp;
                  <input type="time" id="totuesday" name="to"></input>
                  &nbsp;&nbsp;
                </div>

                <div className="col-md-6 d-flex mt-3 ">
                  <div className="form-check form-switch">
                    <Checkbox.Group style={{ width: "100%" }}>
                      <Checkbox value="wednesday">wednesday</Checkbox>
                    </Checkbox.Group>
                  </div>
                </div>
                <div className="col-md-6 d-flex mt-3 ">
                  <label className="form-check-label" htmlFor="fromwednesday">
                    From :{" "}
                  </label>
                  &nbsp;&nbsp;
                  <input type="time" id="fromwednesday" name="from"></input>
                  &nbsp;&nbsp;
                  <label class="form-check-label" htmlFor="towednesday">
                    To :{" "}
                  </label>
                  &nbsp;&nbsp;
                  <input type="time" id="towednesday" name="to"></input>
                  &nbsp;&nbsp;
                </div>

                <div className="col-md-6 d-flex mt-3 ">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="thursday"
                      {...register("thursday", {
                        required: {
                          value: true,
                          message: "this is imortant",
                        },
                      })}
                    />
                    <label className="form-check-label" htmlFor="thursday">
                      Thursday
                    </label>
                  </div>
                </div>
                <div className="col-md-6 d-flex mt-3 ">
                  <label className="form-check-label" htmlFor="fromthursday">
                    From :{" "}
                  </label>
                  &nbsp;&nbsp;
                  <input type="time" id="fromthursday" name="from"></input>
                  &nbsp;&nbsp;
                  <label className="form-check-label" htmlFor="tothursday">
                    To :{" "}
                  </label>
                  &nbsp;&nbsp;
                  <input type="time" id="tothursday" name="to"></input>
                  &nbsp;&nbsp;
                </div>

                <div className="col-md-6 d-flex mt-3 ">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="friday"
                      {...register("friday", {
                        required: {
                          value: true,
                          message: "this is imortant",
                        },
                      })}
                    />
                    <label className="form-check-label" htmlFor="friday">
                      Friday
                    </label>
                  </div>
                </div>
                <div className="col-md-6 d-flex mt-3 ">
                  <label className="form-check-label" htmlFor="fromfriday">
                    From :{" "}
                  </label>
                  &nbsp;&nbsp;
                  <input type="time" id="fromfriday" name="from"></input>
                  &nbsp;&nbsp;
                  <label className="form-check-label" htmlFor="tofriday">
                    To :{" "}
                  </label>
                  &nbsp;&nbsp;
                  <input type="time" id="tofriday" name="to"></input>
                  &nbsp;&nbsp;
                </div>

                <div className="col-md-6 d-flex mt-3 ">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="saturday"
                      {...register("saturday", {
                        required: {
                          value: true,
                          message: "this is imortant",
                        },
                      })}
                    />
                    <span>
                      {" "}
                      <p>
                        {" "}
                        {errors.saturday && (
                          <span>This field is required</span>
                        )}{" "}
                      </p>{" "}
                    </span>

                    <label className="form-check-label" htmlFor="saturday">
                      Saturday
                    </label>
                  </div>
                </div>
                <div className="col-md-6 d-flex mt-3 ">
                  <label className="form-check-label" htmlFor="fromsaturday">
                    From :{" "}
                  </label>
                  &nbsp;&nbsp;
                  <input type="time" id="fromsaturday" name="from"></input>
                  &nbsp;&nbsp;
                  <label className="form-check-label" for="tosaturday">
                    To :{" "}
                  </label>
                  &nbsp;&nbsp;
                  <input type="time" id="tosaturday" name="to"></input>
                  &nbsp;&nbsp;
                </div>
              </div>

              <div className="card-header colorblack">
                <b>
                  <i
                    className=" mr-3 colorblack"
                    style={{ fontSize: "20px" }}
                  ></i>
                  Select Service
                </b>
              </div>
              <div className="row card-body">
                <div className="col-md-12 d-flex ">
                  <div className="form-check form-switch ">
                    <Checkbox.Group
                      style={{ width: "100%" }}
                      onChange={servicesDelivery}
                    >
                      <Row>
                        <Checkbox value="food develvery">
                          food develvery
                        </Checkbox>

                        <Checkbox value="slef pick up">slef pick up</Checkbox>
                      </Row>
                    </Checkbox.Group>
                  </div>
                </div>
                <div className="col-md-12 d-flex mt-4">
                  <label>Select Self-Pickup/Delivery</label>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type="time"
                    name="delivery_time"
                    value=""
                    {...register("deliveryServices", { required: true })}
                  />
                  {errors.deliveryServices && (
                    <span>This field is required</span>
                  )}
                </div>
              </div>
              <div className="card-footer">
                <center>
                  <button
                    onClick={bankLocation}
                    className="btn btn-outline-dark"
                    style={{ padding: "5px 5rem" }}
                  >
                    Next
                  </button>
                </center>
              </div>
            </div>
          </div>
        )}

        {bankDetail && (
          <div className="container">
            <div className="card bgk">
              <div className="card-header colorblack">
                <b>
                  <NavLink
                    to="/pickUpLocation"
                    className="fa fa-angle-left mr-3 colorblack"
                    style={{ fontSize: "20px" }}
                  />
                  Bank Details
                </b>
              </div>

              <div className="card-body">
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label>Account Holder Name</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("accountHolderName", { required: true })}
                    />
                  </div>
                  <div className="col-md-12 mt-3">
                    <label>Account Number</label>
                    <input
                      type="number"
                      className="form-control"
                      {...register("accountNumber", { required: true })}
                    />
                  </div>
                  <div className="col-md-12 mt-3">
                    <label>Retype Account Number</label>
                    <input
                      type="number"
                      className="form-control"
                      {...register("retypeAccountName", { required: true })}
                    />
                  </div>
                  <div className="col-md-12 mt-3">
                    <label>Bank IBAN Code</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("IfscCode", { required: true })}
                    />
                  </div>
                  <div className="col-md-12 mt-3">
                    <label>Bank Name</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("bankName", { required: true })}
                    />
                  </div>

                  <div className="col-md-6 mt-3">
                    <label>City</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("BankCity", { required: true })}
                    />
                  </div>
                  <div className="col-md-6 mt-3">
                    <label>State</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("BankState", { required: true })}
                    />
                  </div>
                </div>
              </div>

              <div className="card-footer">
                <center>
                  <button
                    type="submit"
                    className="btn btn-outline-dark"
                    style={{ padding: "5px 5rem" }}
                  >
                    Save
                  </button>
                </center>
              </div>
            </div>
          </div>
        )}
      </form>
    </>
  );
}

export default RestaurentDetailsManagement;
