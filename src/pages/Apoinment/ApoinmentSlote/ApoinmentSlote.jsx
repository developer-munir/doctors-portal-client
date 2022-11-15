import React from "react";

const ApoinmentSlote = ({ apoinment, setBooking }) => {
  // console.log(apoinment);
    const { slots, name } = apoinment; 
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-center text-2xl text-primary">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <label htmlFor="booking-modal" className="btn btn-primary"  disabled ={slots.length === 0} onClick={()=> setBooking(apoinment)}>
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default ApoinmentSlote;
