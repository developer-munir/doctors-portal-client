import React from "react";
import Header from "../Header/Header";
import Info from "../Header/Info";
import "../Header/header.css";
import { BsFillAlarmFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { FcCallback } from "react-icons/fc";
const Home = () => {
  const alerm = (
    <React.Fragment>
      <BsFillAlarmFill size={50}></BsFillAlarmFill>
    </React.Fragment>
    );
  const location = (
      <React.Fragment>
          <HiLocationMarker size={50}></HiLocationMarker>
    </React.Fragment>
    );
  const phone = (
      <React.Fragment>
          <FcCallback size={50}></FcCallback>
    </React.Fragment>
    );
    const title1 = (
      <React.Fragment>
            <h1>Opening Hours</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi et earum, dicta saepe </p>
      </React.Fragment>
    );
    const title2 = (
      <React.Fragment>
        <h1>Visit our location</h1>
        <p>Brooklyn, NY 10036, United States</p>
      </React.Fragment>
    );
    const title3 = (
      <React.Fragment>
        <h1>Contact us now</h1>
        <p>Contact us nowContact us now</p>
      </React.Fragment>
    );
  return (
    <div className="mx-[21px]">
      <Header></Header>
      <div className="grid md:grid-cols-3 gap-6 relative bottom-3 mt-[80px] md:mt-0">
        <div className="opening-hours">
          <Info icon={alerm} title={title1}></Info>
        </div>
        <div className="bg-accent rounded-[14px] text-white">
          <Info icon={location} title={title2}></Info>
        </div>
        <div className="contact">
          <Info icon={phone} title={title3}></Info>
        </div>
      </div>
    </div>
  );
};

export default Home;
