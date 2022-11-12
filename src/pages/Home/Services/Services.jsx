import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whiting from "../../../assets/images/whitening.png";
import Service from "./Service";
import ServiceTerms from "./ServiceTerms";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Fluoride Treatment",
      img: fluoride,
      describtion:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 2,
      title: "Cavity Filling",
      img: cavity,
      describtion:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 3,
      title: "Teeth Whitening",
      img: whiting,
      describtion:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <div className="my-36">
      <div className="text-center mb-12">
        <h2 className="text-[20px] font-bold text-secondary">Our Services</h2>
        <h1 className="text-[36px]">Services We Provide</h1>
      </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[34px]">
              {
                  servicesData.map(service => <Service key={service.id} service={service}></Service>)
              }
          </div>
          <div>
              <ServiceTerms></ServiceTerms>
          </div>
    </div>
  );
};

export default Services;
