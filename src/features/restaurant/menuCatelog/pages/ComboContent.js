import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../../admin/footer/Footer";
import ResMainHeader from "../../ResMainHeader";
import SideBar from "../../sidebar/SideBar";
import { useForm } from "react-hook-form";
import axios from "axios";
import { UserId, Token } from "../../../../config/Config";
import {  Select } from "antd";

function ComboContent() {
  const token = Token().token;
  const res_id = UserId().user_id;
  //   const url = PathUrl().urlData.development;
  const { register, handleSubmit, reset } = useForm();
  const [dish, setDish] = useState([]);
  //   add input mutiple fileds

  const [selectedVideo, setSelectedVideo] = useState();
  const [menu, setMenu] = useState([]);
  const [catagory, setCatagory] = useState([]);

  const [selectedFiles, setSelectedFiles] = useState([])
  const [multipleImage, setMultipleImage] = useState([])

  console.log(selectedVideo, "selectedVideo");

  const [comboItem, setComboItem] = useState([]);

  const Option = Select;

  function multipaleChange(value) {
    setComboItem(value);
  }
  console.log(comboItem)
  

  // video upload
  const videoChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedVideo(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => {
    setSelectedVideo();
  };

  const handleImageChangeDemo = (e) => {
    setSelectedFiles([]);
    setMultipleImage(e.target.files);
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setSelectedFiles((prevImages) => prevImages.concat(fileArray));
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
  };

  const renderPhotos = (source) => {
    return source.map((photo) => {
      return (
        <img
          className="p-2"
          src={photo}
          alt=""
          key={photo}
          style={{ width: "20%", height: "180px" }}
        />
      );
    });
  };

  

  
  const onSubmit = (data) => {
    let dd = new FormData();
    let files = multipleImage;
    console.log(files)
    for (let i = 0; i < files.length; i++) {
      dd.append("file[]", files[i]);
    }
    dd.append("video", selectedVideo);
    dd.append("res_id", res_id);
    dd.append("item", comboItem);
    dd.append("name", data.name);
    dd.append("description", data.description);
    dd.append("price", data.price);
    dd.append("type", data.type);
    dd.append("packaging_charge", data.packaging_charge);
    dd.append("menu", data.menu);
    dd.append("category", data.category);
    dd.append("purchase_measure", data.purchase_measure);

    axios
      .post(`http://52.91.235.134/api/ComboDish`, dd, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        console.log(response.data, "dish ka return data");
        reset();
      })
      .catch((response) => {
        console.error(response.error);
      });
    console.log(data, "8888888888888888888");
  };

  const menuData = () => {
    return axios
      .get("http://52.91.235.134/api/menu")
      .then((response) => {
        console.log(response.data);
        setMenu(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const categoryData = () => {
    return axios
      .get("http://52.91.235.134/api/category")
      .then((response) => {
        console.log(response.data);
        setCatagory(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const dishData = () => {
    return axios
      .get("http://52.91.235.134/api/Dish", { id: res_id })
      .then((response) => {
        console.log(response.data, "dish datta");
        setDish(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };



  useEffect(() => {
    menuData();
    categoryData();
    dishData();
  }, []);

 
  console.log(multipleImage, "images");

  return (
    <>
      <ResMainHeader />
      <div id="wrapper">
        <SideBar />
        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            <div className="card">
              <NavLink
                to="/menuCatelog"
                className="fa fa-angle-left colorblack card-header bold text-decoration-none"
              >
                ADD Combo
              </NavLink>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-6">
                      <div className="col-12 d-flex mt-4">
                        <div className="col-3">
                          <label>Item Name :</label>
                        </div>
                        <div className="col-9">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Enter Your"
                            {...register("name", { required: true })}
                          />
                        </div>
                      </div>

                      <div className="col-12 d-flex mt-4">
                        <div className="col-3">
                          <label>Veg / Non Veg :</label>
                        </div>
                        <div className="col-9">
                          <div className="d-flex">
                            <div class="form-check mr-5">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="veg"
                                id="flexRadioDefault1"
                                {...register("type", { required: true })}
                              />
                              <label
                                class="form-check-label"
                                HtmlFor="flexRadioDefault1"
                              >
                                Veg
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                value="non veg"
                                id="flexRadioDefault2"
                                {...register("type", { required: true })}
                              />
                              <label
                                class="form-check-label"
                                HtmlFor="flexRadioDefault2"
                              >
                                Non Veg
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>




                      <div className="col-12 d-flex mt-4">
                        <div className="col-3">
                          <label>Select Dish :</label>
                        </div>
                        <div className="col-9">
                          {/*<MultiSelect
                            options={options}
                            value={selectTag}
                            onChange={setSelectTag}
                            labelledBy="Select"
                         />*/}
                          <Select
                            mode="multiple"
                            style={{ width: "100%" }}
                            placeholder="Please select"
                            onChange={multipaleChange}
                          >
                            {dish.map((e) => (
                        
                              <Option value={e.id}>{e.name}</Option>
                            ))}
                          </Select>
                        </div>
                      </div>



                    </div>
                    <div className="col-6">
                      <label>Item Description :</label>
                      <br></br>
                      <textarea className="form-control" rows="4"   {...register("description", { required: true })}></textarea>
                    </div>
                  </div>
                  <h5 className="col-12">Item Pricing</h5>

                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 d-flex">
                        <div className="col-2">
                          <label>Item Price :</label>
                        </div>
                        <div className="col-4">
                          <input
                            className="form-control"
                            type="number"
                            {...register("price", { required: true })}
                          />
                        </div>
                        <div className="col-2">
                          <label>Packaging Charge :</label>
                        </div>
                        <div className="col-4">
                          <input
                            className="form-control"
                            type="number"
                            {...register("packaging_charge", { required: true })}
                          />
                        </div>
                      </div>
                   
                      <div className="col-12 d-flex mt-3">
                        <div className="col-2 pl-3">
                          <label>Select Menu :</label>
                        </div>
                        <div className="col-4">
                          <select className="form-control" {...register("menu")}>
                            {menu.map((e) => (
                              <option value={e.id}>{e.name}</option>
                            ))}
                          </select>
                        </div>
                        <div className="col-2 pl-3">
                          <label>Category :</label>
                        </div>
                        <div className="col-4">
                          <select
                            className="form-control"
                            {...register("category", {
                              required: true,
                            })}
                          >
                            {catagory.map((e) => (
                              <option value={e.id}>{e.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <h5 className="col-12 mt-3">ADDONS</h5>

                      <div className="col-12 d-flex mt-3">
                        <div className="col-2 pl-3">
                          <label>Purchase Measure :</label>
                        </div>
                        <div className="col-4">
                          <select
                            className="form-control"
                            {...register("purchase_measure", { required: true })}
                          >
                            <option selected disabled>
                              please select
                            </option>
                            <option value="Milliliters">
                              Milliliters (ml)
                            </option>
                            <option value="Liters">Liters</option>
                            <option value="Deciliter">Deciliter</option>
                            <option value="Liquid ounce"> Liquid ounce</option>
                            <option value="Pounds">Pounds</option>
                            <option value="Ounce">Ounce</option>
                            <option value="Milligrams">Milligrams</option>
                            <option value="Grams">Grams</option>
                            <option value="Kilograms">Kilograms</option>
                            <option value="Teaspoonful">Teaspoonful</option>
                            <option value="Tablespoon">Tablespoon</option>
                            <option value="Glass">Glass</option>
                            <option value="Taza">Taza</option>
                            <option value="Bowl">Bowl</option>
                            <option value="Pinta">Pinta</option>
                            <option value="Barrel">Barrel</option>
                            <option value="Gill">Gill</option>
                            <option value="Quartos">Quartos</option>
                            <option value="Gallons">Gallons</option>
                            <option value="Bag">Bag</option>
                            <option value="Container">Container</option>
                            <option value="Bottle">Bottle</option>
                            <option value="Paperboard">Paperboard</option>
                            <option value="Box">Box</option>
                            <option value="Roll">Roll</option>
                            <option value="Jar">Jar</option>
                            <option value="Unit">Unit</option>
                            <option value="Each">Each</option>
                            <option value="Package">Package</option>
                            <option value="Pinch">Pinch</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="row mt-5">
                      <div className="col-6">
                        <div className="col-12">
                          <h5 className="mb-3">Upload video only</h5>
                          <input
                            accept="video/*"
                            type="file"
                           
                            onChange={videoChange}
                          />

                          {selectedVideo && (
                            <div className="col-md-12 col-lg-12 ">
                              <button
                                onClick={removeSelectedImage}
                                className="btn btn-sm mr-4"
                                style={{
                                  float: "right",
                                  color: "black",
                                  fontWeight: "bolder",
                                }}
                              >
                                X
                              </button>
                              <br />
                              <video
                                controls
                                style={{
                                  maxWidth: "75%",
                                  minWidth: "55%",
                                  maxHeight: "230px",
                                }}
                              >
                                <source
                                  src={URL.createObjectURL(selectedVideo)}
                                ></source>
                              </video>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="col-12">
                          <h5 className="mb-3">Upload Images Only</h5>
                        </div>
                        <div className="col-12">
                          <input
                            type="file"
                            name="file[]"
                            id="file"
                            multiple
                            onChange={handleImageChangeDemo}
                          />
                          <div className="result">
                            {renderPhotos(selectedFiles)}
                          </div>


                          {/* <ImgCrop rotate>
                           <Upload
                             action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture-card"
                            fileList={multipleImage}
                             onChange={UploadImage}
                             onPreview={onPreview}
                           >
                             {multipleImage.length < 10 && "+ Upload"}
                           </Upload>  
                          <input
                            multiple
                             type="file"
                             name="image[]"
                             {...register("image", {
                               required: true,
                             })}
                         />
                       </ImgCrop> */}


                        </div>
                      </div>
                    </div>

                    <div className="row mt-5">
                      <div className="col-12" style={{ textAlign: "center" }}>
                        <button className="btn btn-danger " type="submit">
                          SAVE & SUBMIT FOR APPROVAL
                        </button>
              
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default ComboContent;
