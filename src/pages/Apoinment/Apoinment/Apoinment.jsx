import React, { useState } from 'react';
import ApoinmentHeader from '../ApoinmentHeader/ApoinmentHeader';
import AvailableApoinment from '../AvailableApoinment/AvailableApoinment';
const Apoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    // console.log(booking)
    return (
      <div className="mx-[21px]">
        <ApoinmentHeader
          setSelectedDate={setSelectedDate}
          selectedDate={selectedDate}
        ></ApoinmentHeader>
        <AvailableApoinment
          selectedDate={selectedDate}
          
        ></AvailableApoinment>
        
      </div>
    );
};

export default Apoinment;