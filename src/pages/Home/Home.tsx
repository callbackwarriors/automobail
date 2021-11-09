import Hero from "components/Hero/Hero";
import Services from "components/Services/Services";
import Footer from "components/utilities/Footer";
import Header from "components/utilities/Header";
// import Header from "components/utilities/Header";
import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Footer />
    </>
  );
};

export default Home;