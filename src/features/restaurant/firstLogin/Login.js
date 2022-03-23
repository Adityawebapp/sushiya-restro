import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { PathUrl, Token } from "../../../config/Config";
import { useHistory } from "react-router";
import { MyNewLogin } from "./MyNewLogin";

function Login() {
  const token = Token().token;
  const url = PathUrl().urlData.development;
  // For Save login Form Data
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    let dd = new FormData();
    dd.append("email", data.email);
    dd.append("password", data.password);
    dd.append("remember", data.remember);

    axios
      .post(`${url}/RestaurantFirstLogin`, dd, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        console.log(response.data, "from restaurant first login controller");
        if (JSON.stringify(response.data.data.user.first_login_flag) === "0") {
          history.push("/restaurantDetails");
        }
        if (JSON.stringify(response.data.data.user.first_login_flag) === "1") {
          history.push("/restaurant");
        }

        localStorage.setItem('token', response.data.data.token);
                    localStorage.setItem('user', JSON.stringify(response.data.data.user));
                    localStorage.setItem('user_type', response.data.data.user.type);
                    localStorage.setItem('user_id', response.data.data.user.id);
                    localStorage.setItem('status', response.data.data.user.status);
                    localStorage.setItem('first_login_flag', response.data.data.user.first_login_flag);
      })
      .catch((error) => {
        console.error(error);
      });

    console.log(dd, "login form data");
  };
  const nextstep = () => {};
  return (
    <>
      <div className="col-md-6 " >
        <div className="border shadow "
          style={{
           
            margin: "2rem 3rem 0rem 3rem",
            borderRadius: "15px",
          }}
        >
          <ul
            className="nav nav-pills nav-justified "
            id="ex1"
            role="tablist"
            style={{ margin: "2rem 0 2rem 0", fontSize: "30px" }}
          >
            <li className="nav-item" role="presentation">
              <b>SUSHIYA</b>
            </li>
          </ul>

          <div
            className="tab-content"
            style={{ margin: "0rem 5rem 0rem 5rem" }}
          >
            <div
              className="tab-pane fade show active"
              id="pills-login"
              role="tabpanel"
              aria-labelledby="tab-login"
            >
              <form
                style={{ marginBottom: "5rem" }}
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="form-outline mb-4">
                  <input
                    {...register("email", { required: true, maxLength: 50 })}
                    type="email"
                    id="loginName"
                    className="form-control"
                  />
                  <label className="form-label" for="loginName">
                    Email or username
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    {...register("password", { required: true, maxLength: 50 })}
                    id="loginPassword"
                    className="form-control"
                  />
                  <label className="form-label" for="loginPassword">
                    Password
                  </label>
                </div>

                <div className="row mb-4">
                  <div className="col-md-6 d-flex justify-content-center">
                    <div className="form-check mb-3 mb-md-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="loginCheck"
                        {...register("remember")}
                      />
                      <label className="form-check-label" for="loginCheck">
                        Remember me
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6 d-flex justify-content-center">
                    <to className="btn btn-default" onClick={nextstep()}>
                      Forgot password?
                    </to>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn  btn-block mb-4"
                  style={{ backgroundColor: "#E2611E", color: "white" }}
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
 

    { /* new desig layout for myself */}


    <MyNewLogin/>



    </>
  );
}

export default Login;
