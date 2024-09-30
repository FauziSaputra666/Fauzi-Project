import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/HomePage/Header";
import Produk from "../../components/HomePage/Produk";
import Faq from "../../components/HomePage/faq";
import Sustainability from "../../components/HomePage/sustainability";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navigation />
      <Header />
      <Produk />
      <Faq />
      <Sustainability />
      <Footer />
    </>
  );
};

export default Home;
