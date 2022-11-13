import React, { useEffect, useState } from 'react';

import { format } from "date-fns";
import ApoinmentSlote from '../ApoinmentSlote/ApoinmentSlote';

const AvailableApoinment = ({ selectedDate, setBooking }) => {
  const [apoinmentSlote, setApoinmentSlote] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setApoinmentSlote(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <p className="text-center text-3xl my-3 text-secondary">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apoinmentSlote?.map((apoinment) => (
          <ApoinmentSlote
            apoinment={apoinment}
            key={apoinment._id}
            setBooking={setBooking}
          ></ApoinmentSlote>
        ))}
      </div>
    </div>
  );
};

export default AvailableApoinment;