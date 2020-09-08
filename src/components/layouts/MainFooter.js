import React from "react";
import tw from "twin.macro";
import {NavLink} from "react-router-dom"
import { Container } from "../layouts/layoutDiv";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./MainFooter.scss";
const MainFooterDiv = tw(
  Container
)`  lg:mt-6 md:mt-6 mt-12   shadow-2xl rounded-lg md:p-16 lg:p-16 p-12 box-border bg-white z-10 flex-grow-0 max-w-full relative  lg:w-full md:w-full h-auto flex flex-col `;

const SmallDiv = tw.div`w-full lg:mt-1 md:mt-1 mt-12  flex flex-row  justify-center box-border `;
const LoginButton = tw.div`bg-white text-blue-600 absolute right-0 h-8 rounded-full flex items-center justify-center border-2 border-blue-700 w-32 mr-4 hover:bg-blue-700 hover:text-white`;
const UL = tw.ul`list-none `;
const LI = tw.li`lg:p-2 md:p-2 p-1 flex-wrap font-extrabold tracking-widest`;
const IconFacebook = tw.div`flex-row  flex w-full`

// const SocialMedia = {
//   facebook: "someurl",
//   twitter: "someurl",
//   linkedin: "someurl",
// };
const FooterDiv = () => {
  return (
    <MainFooterDiv
      className="Main__footer"
      style={{ marginRight: "165px", marginLeft: "165px", height: "55vh" }}
    >
      <IconFacebook>
      <FacebookIcon style={{ padding: "0.1rem", margin:"10px",color: " #3b5998 " }} />

      <TwitterIcon style={{ padding: "0.1rem",  margin:"10px", color: " #1DA1F2" }} />

      <LinkedInIcon style={{ padding: "0.1rem", margin:"10px",  color: " #0e76a8" }} />

      <NavLink to="/login" style={{textDecoration:"none"}}> <LoginButton style={{ border: "2px solid lightblue" }}>
      sign in
      </LoginButton></NavLink>
      </IconFacebook>
      <SmallDiv>
      <UL>
      
        <LI>Our services</LI>
        <LI>About us</LI>
        <LI>How it works</LI>
        <LI>Clients</LI>
        <LI>Our services</LI>
      </UL>
      </SmallDiv>
    </MainFooterDiv>
  );
};

export default FooterDiv;
