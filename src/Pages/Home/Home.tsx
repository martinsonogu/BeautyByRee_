import React from "react";
import modelImage from "../../asset/Images/modelImage1.png";
import SmearedGloss from "../../asset/Images/SmearedGloss.png";

const Home = () => {
  return (
    <div className="bg-primaryColor w-screen h-90 flex items-center">
      <img src={modelImage} alt="Description of the image" />
      <div>
        <p>BRCOSMETICS</p>
        <p>'For Every Woman'</p>
        <img src={SmearedGloss} alt="Description of the image" />
      </div>
    </div>
  );
};

export default Home;
