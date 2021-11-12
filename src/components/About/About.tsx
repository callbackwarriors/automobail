/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { MdTrendingFlat } from "react-icons/md";

const About = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center gap-20 section-padding">
        <div className="w-full px-2 md:w-7/12">
          <img
            className="object-cover object-center w-full rounded h-3/6"
            src="https://i.ibb.co/Pc7B32c/43025.jpg"
            alt=""
          />
        </div>
        <div className="text-justify md:w-5/12">
          <div>
            <p>About Our Company</p>
            <h4 className="mb-2 text-4xl font-bold">How We Can Help you</h4>
          </div>
          <p className="text-base leading-relaxed">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary,
          </p>
          <button className="flex items-center p-3 mt-6 font-semibold bg-blue-900 rounded-md text-blue-50 menu-list-item hover:bg-blue-700">
            View More <MdTrendingFlat className="ml-2 text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
