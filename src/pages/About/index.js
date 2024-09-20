import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import AboutContent from "../../components/AboutPage/AboutContent";
import Footer from "../../components/Footer/Footer";
import DetailAbout from "../../components/AboutPage/DetailAbout";
import VisiMisi from "../../components/AboutPage/VisiMisi";


const About = () => {
  return (
    <>
      <Navigation />
      <AboutContent />
      <DetailAbout />
      <VisiMisi />
      <Footer />
    </>
  );
};

export default About;
