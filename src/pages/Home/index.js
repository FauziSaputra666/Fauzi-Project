import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/HomePage/Header";
import Produk from "../../components/HomePage/Produk";
import Faq from "../../components/HomePage/faq";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Produk />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
