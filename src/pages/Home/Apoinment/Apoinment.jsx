import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import apoinmentBanner from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../components/PrimaryButton';

const Apoinment = () => {
    return (
      <div
        className="hero md:px-9"
        style={{ backgroundImage: `url(${apoinmentBanner})` }}
      >
        <div className="hero-content flex-col lg:flex-row">
          <img src={doctor} className="hidden lg:block w-1/2 -mt-[130px]" alt="" />

          <div className="lg:w-1/2 text-white">
            <h1 className="text-xl text-secondary font-bold">Appointment</h1>
            <h1 className="text-4xl font-bold">Make an appointment Today</h1>
            <p className="py-6">
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    );
};

export default Apoinment;