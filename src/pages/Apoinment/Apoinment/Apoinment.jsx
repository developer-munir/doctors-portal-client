import React, { useState } from 'react';
import ApoinmentHeader from '../ApoinmentHeader/ApoinmentHeader';
import { format } from "date-fns";
const Apoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
      <div>
        <ApoinmentHeader
          setSelectedDate={setSelectedDate}
          selectedDate={selectedDate}
        ></ApoinmentHeader>
        <p className='text-center text-3xl my-3'>You Picked {format(selectedDate, "PPP")}</p>
      </div>
    );
};

export default Apoinment;