import React from "react";
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
            <h2 className="text-6xl font-bold text-blue-900">
              We Make Car <br />
              Repair Hassle Free
            </h2>
            <br />
            <p className="w-full text-gray-800 md:w-2/3 text-1xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui est
              iure voluptatem laborum quisquam tempora.
            </p>{" "}
            <br />
            <button className="flex p-3 font-semibold bg-blue-900 rounded-md text-blue-50 menu-list-item hover:bg-blue-700">
              <a href="/">View More</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
