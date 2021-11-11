/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

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
        <div className="md:w-5/12">
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

          <ul className="social-icons ">
            <li>
              <Link to="">
                <a target="_blank">
                  <FaFacebookF className="text-white" />
                </a>
              </Link>
            </li>
            <li>
              <Link to="">
                <a target="_blank">
                  <FaTwitter className="text-white" />
                </a>
              </Link>
            </li>
            <li>
              <Link to="">
                <a target="_blank">
                  <FaLinkedinIn className="text-white" />
                </a>
              </Link>
            </li>
            <li>
              <Link to="">
                <a target="_blank">
                  <FaInstagram className="text-white" />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
