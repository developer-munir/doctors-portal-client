import React from "react";
import treatment from '../../../assets/images/treatment.png';
const ServiceTerms = () => {
  return (
    <div className="hero mt-12">
      <div className="hero-content flex-col md:flex-row lg:px-[150px] lg:py-[80px]">
        <div className="lg:w-1/2 p-5 md:p-0">
          <img
            src={treatment}
            className="rounded-lg shadow-2xl lg:w-[458px] lg:h-[576px]"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 mt-9 lg:mt-0">
          <h1
            className="text-5xl font-bold text-[#3A4256]"
          >
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceTerms;
