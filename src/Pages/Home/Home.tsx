import React from "react";
import Hero from "../../components/Hero/Hero";
import Product from "../../components/Product/Product";

const Home = () => {
  return (
    <div
      className="bg-pureWhite w-screen"
      //style={{ height: "calc(100vh - h-68)" }}
    >
      {/* <Hero /> */}
      <Product />
    </div>
  );
};

export default Home;
