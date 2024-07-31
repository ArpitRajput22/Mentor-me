import React from "react";
import Header from "../Header/Header";
import Services from "../Services/Services";
import RouteMentor from "../RouteMentor/RouteMentor";
import Appointment from "../Appointment/Appointment";
import Footer from "../../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <RouteMentor></RouteMentor>
      <Appointment></Appointment>
      <Footer></Footer>
      {/* <Testimonial></Testimonial>
            <Blog></Blog>
           
            <Contact></Contact>
             */}
    </div>
  );
};

export default Home;
