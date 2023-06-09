import React from "react";
import modelImage from "../../asset/Images/modelImage1.png";
import SmearedGloss from "../../asset/Images/SmearedGloss.png";

const Hero = () => {
  return (
    <div
      className="bg-primaryColor w-screen  flex items-center h-90 mb-10"
      //style={{ height: "calc(100vh - h-68)" }}
    >
      <img src={modelImage} alt="Description of the image" />
      <div className="pl-20">
        <p className="font-bold text-5xl pl-10 ">BRCOSMETICS</p>
        {/* <div>
              <p>'For Every Woman'</p>
              <img src={SmearedGloss} alt="Description of the image" />
            </div> */}
        <div className="relative">
          <img
            src={SmearedGloss}
            alt="Description of the image"
            className="h-100 w-100"
          />
          <p className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold">
            'For Every Woman'
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
