import React, { useState } from "react";
import Switch from "react-switch";
import axios from "axios";
import { PathUrl, Token, UserId } from "../../config/Config";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";
import { AiOutlineLogout, AiFillBell } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";

import { Avatar, Badge, Layout, Menu, Dropdown, Input, Button } from "antd";
const { Content, Header } = Layout;

function ResMainHeader() {
  // Token ,UserId and Url
  const token = Token().token;
  const res_id = UserId().user_id;
  const url = PathUrl().urlData.development;

  const history = useHistory();

  const [checked, setChecked] = useState(true);
  const [active, setActive] = useState("Active");
  const handleChange = (Checked) => {
    setChecked(Checked);
    if (active === "Active") {
      setActive("Deactive");
    }
    if (active === "Deactive") {
      setActive("Active");
    }

    axios
      .post(
        `${url}/onlineStatus`,
        { value: Checked, id: res_id },
        { headers: { Authorization: "Bearer " + token } }
      )
      .then((response) => {
        const data = response.data;
        console.log(data, "this is from backend..");
        return data;
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const logOut = () => {
    axios
      .post(
        `${url}/logOut`,
        { value: false, id: res_id },
        { headers: { Authorization: "Bearer " + token } }
      )
      .then((response) => {
        const data = response.data;

        localStorage.clear();
        history.push("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <Layout className="site-layout">
        <Content style={{ overflow: "initial" }}>
          <div
            className="site-layout-background"
            style={{ paddingTop: 15, textAlign: "center" }}
          >
            <nav className="navbar navbar-light bg-light sticky-top ml-auto">
              <div className="container-fluid d-flex justify-content-end align-items-center">
                <div
                  className="d-flex"
                  style={{ width: "43%", marginRight: "1rem" }}
                >
                  <label style={{ width: "100%", marginTop: "0.4rem" }}>
                    Account Status :
                  </label>
                  <label className="form-control mr-4">{active}</label>
                  <Switch
                    onChange={handleChange}
                    checked={checked}
                    className="react-switch mr-4"
                    onColor="#86d3ff"
                    onHandleColor="#2693e6"
                    handleDiameter={25}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    height={20}
                    width={48}
                  />
                  {/* <button class ="btn btn-outline-success" type ="button">ENGLISH</button> */}

                  <Badge count={5}  className="mr-4">
                  <AiFillBell size={30} />
                  </Badge>
                  <Badge >
                  <BsPersonCircle size={30} className="mr-3" />
                  </Badge>
                  <Badge >
                  <AiOutlineLogout size={30} />
                  </Badge>
                  
                
                </div>
              </div>
            </nav>
          </div>
        </Content>
      </Layout>
    </>
  );
}

export default ResMainHeader;
