import React from "react";
import { MdTrendingFlat } from "react-icons/md";
import "react-lazy-load-image-component/src/effects/blur.css";

const Hero = () => {
  return (
    <>
      <div className="relative flex items-center justify-center min-h-screen bg-white">
        <div className="container flex flex-col items-center mx-auto md:flex-row-reverse">
          <div className="w-full md:w-7/12">
            <img
              className="w-full"
              src="https://i.ibb.co/BgYShBd/banner01.png"
              alt="saymon"
            />
          </div>

          <div className="w-full md:w-5/12 md:text-left">
            <h1 className="text-6xl font-bold text-blue-900">
              Tuneup Your Car <br />
              to Next Level
            </h1>
            <br />
            <p className="w-full text-gray-800 text-1xl">
              We believe in providing top quality workmanship and are <br />
              so confident in our level of service that we back it up <br />
              with a good quality.
            </p>{" "}
            <br />
            <button className="flex items-center p-3 font-semibold bg-blue-900 rounded-md text-blue-50 menu-list-item hover:bg-blue-700">
              View Service <MdTrendingFlat className="ml-2 text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
