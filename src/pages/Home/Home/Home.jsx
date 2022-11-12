import React from "react";
import Header from "../Header/Header";
import Info from "../Header/Info";
import "../Header/header.css";

const Home = () => {
  return (
    <div className="mx-[21px]">
      <Header></Header>
      <div className="grid md:grid-cols-3 gap-6 relative bottom-3">
        <div className="opening-hours">
          <Info></Info>
        </div>
        <div className="bg-accent rounded-[14px]">
          <Info></Info>
        </div>
        <div className="contact">
          <Info></Info>
        </div>
      </div>
    </div>
  );
};

export default Home;
