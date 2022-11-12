import React from "react";
import patient from "../../../assets/images/people1.png";
import Patient from "./Patient";
const Patients = () => {
  const patientsData = [
    {
      id: 1,
      img: patient,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      address: "California",
    },
    {
      id: 2,
      img: patient,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      address: "California",
    },
    {
      id: 3,
      img: patient,
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      address: "California",
    },
  ];
  return (
    <div className="my-24 lg:px-14">
      <div className="mb-12">
        <h2 className="text-[20px] font-bold text-secondary">Testimonial</h2>
        <h1 className="text-[36px]">What Our Patients Says</h1>
      </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[34px] lg:px-5">
              {
                 patientsData.map(patient => <Patient key={patient.id} patient={patient}></Patient>) 
              }
      </div>
    </div>
  );
};

export default Patients;
