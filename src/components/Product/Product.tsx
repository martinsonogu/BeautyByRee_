import React from "react";
import GlosssImg from "../../asset/Images/Gloss1.png";
import LinerImg from "../../asset/Images/Liner1.png";

const Product = () => {
  return (
    <div className="bg-secondaryColor w-screen h-288 pt-10 pb-20">
      <h1 className="text-center text-8xl pb-10">Our Product</h1>
      <div className="px-32 flex justify-between items-center">
        <div>
          <div className="border-1 border-white h-128 max-w-401 mb-5">
            <img
              src={GlosssImg}
              alt="Description of the image"
              className="h-100 w-100"
            />
          </div>
          <div className="h-50 max-w-401 bg-pureWhite rounded-2xl pt-2 pb-2">
            <h2 className="text-center text-lg mb-2 font-semibold ">
              Lip Pop creme
            </h2>
            <div className=" ">
              <p className="whitespace-normal px-2 text-center text-xs">
                Our Lip Pop Creme Are Formulated With <br />
                Vitamin E,Hydrating and Highly <br />
                Pigmented
              </p>
            </div>
            <div className="flex justify-center  mt-2">
              <button className="text-xl font-semibold bg-primaryColor p-2 rounded-xl text-pureWhite">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="border-1 border-white h-128 max-w-401 mb-5">
            <img
              src={LinerImg}
              alt="Description of the image"
              className="h-100 w-100"
            />
          </div>
          <div className="h-50 max-w-401 bg-pureWhite rounded-2xl pt-2 pb-2">
            <h2 className="text-center text-lg mb-2 font-semibold ">
              Lip Pop creme
            </h2>
            <div className=" ">
              <p className="whitespace-normal px-2 text-center text-xs">
                Enjoy Our Soft, Pigmnted And Matte <br /> Precision Lip Liners
                For The <br />
                Perfect Pout
              </p>
            </div>
            <div className="flex justify-center  mt-2">
              <button className="text-xl font-semibold bg-primaryColor p-2 rounded-xl text-pureWhite">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
