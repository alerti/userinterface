import React from "react";
import {NavLink} from "react-router-dom"
import "./Signup.scss";
import tw from "twin.macro";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import FooterDiv from "../layouts/MainFooter";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
const Main = tw.div`shadow-2xl`;
function Signup() {
  return (
    <div className="baba__yao">
      <Main>
        <div className="back__button">
          <p>&nbsp;&nbsp;&nbsp;<NavLink to="/" style={{listStyle:"none",textDecoration:"none"}}>Go back</NavLink></p>
        </div>
        <div className="Main__div">
          <div>
            <p>
              <PersonAddIcon
                style={{
                  color: "green",
                  padding: "5px;",
                  marginRight: "10px;",
                }}
              />
              &nbsp;&nbsp;Create account
            </p>
          </div>

          <div>
            <p>
              Have an account?
              <span style={{ color: "green", fontWeight: "bolder" }}>
                &nbsp;&nbsp;<NavLink to="/login" style={{listStyle:"none",textDecoration:"none",color:"green",fontWeight:"bolder"}}>Login</NavLink>
              </span>
            </p>
          </div>
          <div>
            <label>Name</label>
            <input type="text" placeholder="👤" />
          </div>
          <div>
            <label>Email</label>
            <input type="text" placeholder="📨" />
          </div>
          <div>
            <label>Phone Number</label>
            <input type="text" placeholder="📱" />
          </div>
          <div>
            <label>password</label>
            <input type="text" placeholder="🗝️" />
          </div>
          <div>
            <label>Confirm password</label>
            <input type="text" placeholder="🗝️" />
          </div>
          <div>
          <label>Complete the process</label>
            <input type="submit"  value="Create Account"/>
          </div>
        </div>
      </Main>
      <FooterDiv />
    </div>
  );
}

export default Signup;
