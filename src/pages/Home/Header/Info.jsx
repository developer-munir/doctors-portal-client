import React from "react";

const Info = ({ icon,title }) => {
  return (
    <div className="h-[190px] flex items-center py-14 px-6 ">
      <div>
        <h1>{icon}</h1>
      </div>
      <div className="ml-6">{title}</div>
    </div>
  );
};

export default Info;
