import React, { useState } from 'react';
import ApoinmentHeader from '../ApoinmentHeader/ApoinmentHeader';
import AvailableApoinment from '../AvailableApoinment/AvailableApoinment';
import BookingModal from '../BookingModal/BookingModal';
const Apoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [booking, setBooking] = useState({});
    // console.log(booking)
    return (
      <div className="mx-[21px]">
        <ApoinmentHeader
          setSelectedDate={setSelectedDate}
          selectedDate={selectedDate}
        ></ApoinmentHeader>
        <AvailableApoinment
          selectedDate={selectedDate}
          setBooking={setBooking}
        ></AvailableApoinment>
        {booking && <BookingModal booking={booking}></BookingModal>}
      </div>
    );
};

export default Apoinment;