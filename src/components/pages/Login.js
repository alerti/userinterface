import React from "react";
import {NavLink} from "react-router-dom"
import "./login.scss";
import tw from "twin.macro";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import FooterDiv from "../layouts/MainFooter";
//import ArrowForwardIcon from "@material-ui/icons/ArrowBack";
const Main = tw.div`shadow-2xl`;
function Login() {
  return (
    <div className="baba__yao">
      <Main>
        <div className="back__button">
          <p>&nbsp;&nbsp;&nbsp;<NavLink to="/" style={{listStyle:"none",textDecoration:"none"}}>Go back</NavLink></p>
        </div>
        <div className="Main__div">
          <div>
            <p>
              <VpnKeyIcon
                style={{
                  color: "green",
                  padding: "5px;",
                  marginRight: "10px;",
                }}
              />
              &nbsp;&nbsp;Sign In
            </p>
          </div>

          <div>
            <p>
              Dont have an account?
              <span style={{ color: "green", fontWeight: "bolder" }}>
                &nbsp;&nbsp;<NavLink to="/signup" style={{listStyle:"none",textDecoration:"none",color:"green",fontWeight:"bolder"}}>Sign up</NavLink>
              </span>
            </p>
          </div>
          <div>
            <label>Email</label>
            <input type="text" placeholder="👤" />
          </div>
          <div>
            <label>Password</label>
            <input type="text" placeholder="🗝️" />
          </div>
          <div>
          <label></label>
            <input type="submit" value="Login"/>
          </div>
        </div>
      </Main>
      <FooterDiv />
    </div>
  );
}

export default Login;
