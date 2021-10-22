import Navbar from "../../components/navbar/navbar";
import WelcomeText from "../../components/welocmeText/welcomeText";
import "./home.scss";
import HeaderInputs from "../../components/inputs/headerInputs";
import WhoAreWe from "../../components/WhoAreWe/whoAreWe";
import WhatWeDo from "../../components/whatWeDo/whatWeDo";
import FooterMenus from "./../../components/footerMenus/footerMenus";
import Footer from "../../components/footer/footer";
import WorkingDetails from "./../../components/workingDetails/workingDetails";
import Exp from "./../exp";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  return (
    <>
      <div className="home" style={{ backgroundColor: "white" }}>
        <div
          className="header-background same"
          style={{ backgroundColor: "black" }}
        >
          <Navbar />
          <WelcomeText />
          <HeaderInputs />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>

        <WhoAreWe />
        <WorkingDetails />

        <WhatWeDo />

        <FooterMenus />
        <Footer />
      </div>
    </>
  );
};

export default Home;
