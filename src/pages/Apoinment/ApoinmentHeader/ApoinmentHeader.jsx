import React, { useState } from 'react';
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";

const ApoinmentHeader = ({selectedDate,setSelectedDate}) => {
    
    return (
      <header
        className="hero md:px-9"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse md:mt-52 md:mb-72">
          <div className="lg:w-1/2">
            <img src={chair} className="rounded-lg shadow-2xl w-full" alt="" />
          </div>
          <div className="lg:w-1/2 mt-16 lg:mt-0">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            ></DayPicker>
          </div>
        </div>
      </header>
    );
};

export default ApoinmentHeader;