import React from "react";

const Info = ({ icon,title }) => {
  return (
    <div className="flex items-center flex-col md:flex-row py-14 px-6 ">
      <div>
        <h1>{icon}</h1>
      </div>
      <div className="ml-6 mt-8 md:mt-0">{title}</div>
    </div>
  );
};

export default Info;
