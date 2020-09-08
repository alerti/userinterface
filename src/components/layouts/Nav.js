import React, { ComponentuseRef, useEffect, useState } from "react";
//import { DivMode } from 'react-particles-js';
import tw from "twin.macro";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import useWindowScrollPosition from "@rehooks/window-scroll-position";

import { NavLink } from "react-router-dom";
import "./Nav.scss";
import { Container } from "./layoutDiv";

const Navbar = (props) => {
  const MainDiv = tw.div`h-16 w-screen flex z-50  box-border flex-row shadow-lg items-center  justify-center  p-4  m-1`;
  const UlElements = tw.ul` list-none p-6 flex flex-shrink-0  items-center justify-center `;
  const LI = tw.li`mr-16 flex text-black`;
  const Logo = tw.img`h-4 p-6`;
  const ButtonClass = tw.button`bg-gray-500   px-16 h-8 text-base flex m-4  items-center focus:bg-green-200 focus:border-white focus:rounded-full justify-center right-0 text-black font-bold  rounded-full`;
   const LoginButton = tw(
    ButtonClass
  )`bg-green-400 border-0 hover:bg-green-700 outline-none hover:text-green-100`;
   const SignupButton = tw(
    ButtonClass
  )`bg-blue-400 border-0 hover:bg-blue-900 outline-none hover:text-white`;

  const [change, setChange] = useState(false);
  const changePosition = 100;

  let position = useWindowScrollPosition();
  // position == { x: 0, y: 0 }

  if (position.y > changePosition && !change) {
    setChange(true);
  }

  if (position.y <= changePosition && change) {
    setChange(false);
  }

  let style = {
    backgroundColor: change ? "white" : "transparent",
    transition: "100ms ease",
    fontFamily: "Poppins",
    width: "100%",
  };
  return (
    <React.Fragment>
      <div>
        <div className="MainD-v__here">
          <div className="nav__navbar" style={{ position: "fixed" }}>
            <MainDiv  style={style}>
              <Logo src={props.logo} alt="EPESA"></Logo>
              <UlElements>
                <LI></LI>
                <LI>{props.about}</LI>
                <LI>{props.service}</LI>

                <LI>{props.plans}</LI>
              </UlElements>
              <NavLink
                to="/login"
                style={{ listStyle: "none", textDecoration: "none" }}
              >
                {" "}
                <LoginButton>login</LoginButton>
              </NavLink>
              <NavLink
                to="/signup"
                style={{ listStyle: "none", textDecoration: "none" }}
              >
                <SignupButton>sign up</SignupButton>
              </NavLink>
            </MainDiv>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
