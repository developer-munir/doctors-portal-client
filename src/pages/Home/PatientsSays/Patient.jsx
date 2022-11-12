import React from "react";

const Patient = ({ patient }) => {
  const { img, review, name, address } = patient;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <p>{review}</p>
      </figure>
      <div className="card-body flex flex-row ">
        <div>
          <img
            src={img}
            alt=""
            className="rounded-full w-[64px] h-[64px] border-secondary border-4"
          />
        </div>
        <div>
          <h2 className="card-title">{name}</h2>
          <span>{address}</span>
        </div>
      </div>
    </div>
  );
};

export default Patient;
