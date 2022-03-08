import { ErrorMessage, Formik, Field, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Token, PathUrl } from "../../../../config/Config";
import { useHistory } from "react-router";

const pickUpSchema = Yup.object().shape({
  pin_code: Yup.string().required("Fill This Field.. "),
  address: Yup.string().required("Fill This Field.."),
  country_id: Yup.string().required("Fill This Field.."),
  city_id: Yup.string().required("Fill This Field.."),
});

function PickUpContent() {
  const history = useHistory();
  const token = Token().token;
  const url = PathUrl().urlData.development;

  const onSubmit = (values) => {
    if (values.pin_code == values.address) {
      alert("password matched..");
    } else {
      alert("Password Not matched..");
    }
  };

  axios
    .post(`${url}/RestaurantFirstLogin`, {
      headers: { Authorization: "Bearer " + token },
    })
    .then((response) => {
      // if (response.data.data.user.first_login_flag == "0") {
      //   history.push("/pickUpLocation");
      // }
    })
    .catch((error) => {
      console.error(error);
    });
  // console.log(dd, "login form data");

  return (
    <>
      <div className="col-md-6" style={{ border: "2px solid black" }}>
        <div
          style={{
            border: "2px solid black",
            margin: "2rem 3rem 0rem 3rem",
            borderRadius: "15px",
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
          {/* <ul className="nav nav-pills nav-justified" id="ex1" role="tablist" style={{ margin: "2rem 0 2rem 0", fontSize: '30px' }} >
                        <li className="nav-item" role="presentation">
                            Reset Password
                        </li>

                    </ul> */}

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
              <Formik
                initialValues={{
                  pin_code: "",
                  address: "",
                  country_id: "",
                  city_id: "",
                }}
                validationSchema={pickUpSchema}
                onSubmit={onSubmit}
                style={{ marginBottom: "5rem" }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <label htmlFor="pin_code">Entered PINCODE</label>
                    <Field
                      id="pin_code"
                      name="pin_code"
                      placeholder="Enter PinCode Here.."
                      type="password"
                      className={
                        "form-control" +
                        (errors.pin_code && touched.pin_code
                          ? " is-invalid"
                          : "")
                      }
                    />
                    <ErrorMessage
                      name="pin_code"
                      component="div"
                      className="invalid-feedback"
                    />

                    <label htmlFor="address" className=" mt-4">
                      Address
                    </label>
                    <Field
                      id="address"
                      name="address"
                      placeholder="Enter Address Here...."
                      type="text"
                      className={
                        "form-control" +
                        (errors.address && touched.address ? " is-invalid" : "")
                      }
                    />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="invalid-feedback"
                    />
                    <div className="d-flex justify-content-center">
                      <label
                        htmlFor="country_id"
                        className=" mt-4 "
                        style={{ marginRight: "11rem" }}
                      >
                        Country
                      </label>
                      <label htmlFor="city_id" className=" mt-4 ">
                        City
                      </label>
                    </div>
                    <div className="d-flex justify-content-center">
                      <Field
                        id="country_id"
                        name="country_id"
                        placeholder="Select Country"
                        type="text"
                        className={
                          "form-control mt-2 ml-1 mr-4" +
                          (errors.country_id && touched.country_id
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <ErrorMessage
                        name="country_id"
                        component="div"
                        className="invalid-feedback"
                      />

                      <Field
                        id="city_id"
                        name="city_id"
                        placeholder="Select City"
                        type="text"
                        className={
                          "form-control mt-2 ml-1" +
                          (errors.city_id && touched.city_id
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <ErrorMessage
                        name="city_id"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn mb-4 mt-5"
                      style={{
                        backgroundColor: "#E2611E",
                        color: "white",
                        marginLeft: "8.5rem",
                      }}
                    >
                      Submit
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PickUpContent;
