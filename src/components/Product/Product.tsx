import React from "react";
import GlosssImg from "../../asset/Images/Gloss1.png";
import LinerImg from "../../asset/Images/Liner1.png";

const Product = () => {
  return (
    <div className="bg-secondaryColor w-screen h-288 py-10">
      <h1 className="text-center text-8xl pb-10">Our Product</h1>
      <div className="px-32 flex justify-between items-center">
        <div>
          <div className="border-1 border-white h-128 w-52 mb-5">
            <img
              src={GlosssImg}
              alt="Description of the image"
              className="h-100 w-100"
            />
          </div>
          <div className="h-60 w-100 bg-pureWhite rounded-2xl pt-4">
            <h2 className="text-center text-lg mb-6 font-semibold">
              Lip Pop creme
            </h2>
            {/* <p className="text-center text-xs font-normal w-[238px] mx-auto">
              Our Lip Pop Creme Are Formulated With Vitamin E,Hydrating and
              Highly Pigmented
            </p> */}
            <div className="flex justify-center mb-4 mt-6">
              <button className="text-xl font-semibold bg-primaryColor p-2 rounded-xl text-pureWhite">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="border-1 border-white h-128 w-52 mb-5">
            <img
              src={LinerImg}
              alt="Description of the image"
              className="h-100 w-100"
            />
          </div>
          <div className="h-40 w-100 bg-pureWhite rounded-2xl pt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Product;
