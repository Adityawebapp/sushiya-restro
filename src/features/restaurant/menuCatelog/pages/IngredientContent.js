import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import Footer from "../../../admin/footer/Footer";
import ResMainHeader from "../../ResMainHeader";
import SideBar from "../../sidebar/SideBar";
import {Token, UserId } from "../../../../config/Config";
import { message } from 'antd';

function IngredientContent() {
  const token = Token().token;
  const res_id = UserId().user_id;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {

      const dd = new FormData()
      dd.append('res_id',res_id)
      dd.append('name',data.name)
      dd.append('stock',data.stock)
      dd.append('value',data.value)
      dd.append('purchase_measure',data.purchase_measure)
      dd.append('low_level_warning',data.low_level_warning)
      dd.append('cost_per_unit',data.cost_per_unit)
      dd.append('res_id',res_id)


    axios.post("http://52.91.235.134/api/IngredientStore",dd,{
          headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        message.success('form sava successfully');
        console.log(response.data, "ingredient ka return data");
        reset()
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
                ADD INGREDIENT
              </NavLink>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-2">
                      <label style={{ paddingLeft: "2rem" }}>
                        Ingredient Name :
                      </label>
                    </div>
                    <div className="col-4">
                      <input
                        className="form-control"
                        type="text"
                        {...register("name", {
                          required: true,
                          maxLength: 20,
                        })}
                      />
                      {errors.ingredientname && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="col-2">
                      <label style={{ paddingLeft: "2rem" }}>Stock :</label>
                    </div>
                    <div className="col-4">
                      <input
                        className="form-control"
                        type="number"
                        {...register("stock", {
                          required: true,
                          maxLength: 20,
                        })}
                      />

                      {errors.ingredientname && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 d-flex">
                        <div className="col-2">
                          <label>Cost Per Unit :</label>
                        </div>
                        <div className="col-4">
                          <input
                            className="form-control"
                            type="number"
                            {...register("cost_per_unit", {
                              required: true,
                              maxLength: 20,
                            })}
                          />
                          {errors.cost_per_unit && (
                            <span className="text-danger">
                              This field is required
                            </span>
                          )}
                        </div>
                        <div className="col-2">
                          <label>Low Level Warning :</label>
                        </div>
                        <div className="col-4">
                          <input
                            className="form-control"
                            type="text"
                            {...register("low_level_warning", {
                              required: true,
                              maxLength: 20,
                            })}
                          />
                          {errors.low_level_warning && (
                            <span className="text-danger">
                              This field is required
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12 d-flex mt-3">
                        <div className="col-2 pl-3">
                          <label>Purchase Measure :</label>
                        </div>
                        <div className="col-4">
                          <select
                            className="form-control"
                            {...register("purchase_measure")}
                          >
                            <option selected disabled>
                              please select
                            </option>
                            <option value="Milliliters">Milliliters (ml)</option>
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

                        <div className="col-2 pl-3">
                          <label>Enter value </label>
                        </div>
                        <div className="col-4">
                          <input
                            className="form-control"
                            type="number"
                            {...register("value", {
                              required: true,
                              maxLength: 20,
                            })}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mb-5">
                  <button type="submit" className="btn btn-info text-center">
                    update
                  </button>
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

export default IngredientContent;
