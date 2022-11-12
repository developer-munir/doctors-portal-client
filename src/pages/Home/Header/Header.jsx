import React from "react";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";

const Header = () => {
  return (
    <div className="hero md:px-9" style={{ backgroundImage: `url(${bg})` }}>
      <div className="hero-content flex-col lg:flex-row-reverse md:mt-52 md:mb-72">
        <div className="lg:w-1/2">
          <img src={chair} className="rounded-lg shadow-2xl w-full" alt="" />
        </div>
        <div className="lg:w-1/2 mt-16 lg:mt-0">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary  bg-gradient-to-r from-primary to-secondary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
