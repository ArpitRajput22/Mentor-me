import React from 'react';
import mentor from '../../../images/mentor.png';
import './Appointment.css';

const Appointment = () => {
    return (
        <div className="appointment my-5">
            <div className="container ">
            <div className="row ">
                <div className="col-md-5 d-none d-md-block">
                    <img src={mentor} alt="" />
                </div>
                <div className="col-md-7 text-white py-4">
                    {/* <h5 className="brand-color text-uppercase">Appointment</h5> */}
                    <h1 className="text-warning mb-2">Book a Free-Trial </h1>
                    <p className='text-white mt-4'>Unlock your full potential with a complimentary, personalized mentoring session! Our dedicated mentors will provide valuable insights, guidance, and support to help you set and achieve your educational and personal goals. Don't miss this opportunity to take the first step toward a brighter future. Book your free-trial mentoring session today and embark on a journey of growth and empowerment.  </p>
                    <button className="btn btn-primary mt-3 ">Connect✔</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Appointment;