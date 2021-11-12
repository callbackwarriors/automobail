/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative footer">
      <div className="news-wrap">
        <div className="news-wrap__news-letter ">
          <div className="container mx-auto md:border-b">
            <div className="news-wrap__news-letter--section-wrapper">
              <div className="news-wrap__news-letter--section-wrapper--news-title ">
                <h3>Want Us To Email You About Special Offers And Updates?</h3>
              </div>
              <div className="news-wrap__news-letter--section-wrapper--news-form ">
                <div className="flex flex-col items-end w-full px-8 mx-auto space-y-4 lg:w-2/3 sm:flex-row sm:space-x-4 sm:space-y-0 sm:px-0">
                  <div className="relative flex-grow w-full">
                    <input
                      type="email"
                      placeholder="Email address"
                      id="email"
                      name="email"
                      className="w-full px-3 py-1 text-base leading-8 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border shadow outline-none focus:border-royal-blue focus:bg-transparent focus:ring-2 focus:royal-blue focus:bg-white"
                    />
                  </div>
                  <button className="px-8 py-2 text-lg text-white bg-blue-900 border-0 rounded focus:outline-none hover:bg-blue-700">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-top ">
          <div className="container mx-auto">
            <div className="footer-top__section ">
              <div className="footer-content">
                <div className="footer-top__section--title ">
                  <h4>ABOUT US</h4>
                </div>
                <div className="footer-top__section--content ">
                  <ul className="">
                    <li>
                      <a href="#">Tucson, Arizona 80210</a>
                    </li>
                    <li>
                      <a href="#">501 Archwood Lane</a>
                    </li>
                    <li>
                      <a href="#">Mobile: (520) 577 2710</a>
                    </li>
                    <li>
                      <a href="#">Assistance: Dhanmondi 32</a>
                    </li>
                    <li>
                      <a href="#">E-mail: callbackwarriors@mail.com</a>
                    </li>
                  </ul>

                  <ul className="footer-top__social-icons ">
                    <li>
                      <Link to="">
                        <a target="_blank">
                          <FaFacebookF />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <a target="_blank">
                          <FaTwitter />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <a target="_blank">
                          <FaLinkedinIn />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <a target="_blank">
                          <FaInstagram />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="footer-inner">
                <div className="footer-content">
                  <div className="footer-top__section--title ">
                    <h4>OUR SERVICES</h4>
                  </div>
                  <div className="footer-top__section--content ">
                    <ul className="lab-ul">
                      <li>
                        <a href="/search?query=rect">Engine Diagnostics</a>
                      </li>
                      <li>
                        <a href="/search?query=nextjs">Lube, Oil and Filters</a>
                      </li>
                      <li>
                        <a href="/search?query=mearn">Air Conditioning</a>
                      </li>
                      <li>
                        <a href="/search?query=nodejs">Brake Repair</a>
                      </li>
                      <li>
                        <a href="/search?query=mongodb">
                          Tire and Wheel Services
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="footer-inner">
                <div className="footer-content">
                  <div className="footer-top__section--title ">
                    <h4>HOURS</h4>
                  </div>
                  <div className="footer-top__section--content ">
                    <ul className="lab-ul">
                      <li>
                        <a href="/login">Monday:7:30am - 5:30pm</a>
                      </li>
                      <li>
                        <a href="/register">Tuesday:7:30am - 5:30pm</a>
                      </li>
                      <li>
                        <a href="/profile">Wednesday:7:30am - 5:30pm</a>
                      </li>
                      <li>
                        <a href="/dashboard">Thursday:7:30am - 5:30pm</a>
                      </li>
                      <li>
                        <a href="/dashboard">Friday:7:30am - 5:30pm</a>
                      </li>
                      <li>
                        <a href="/dashboard">Saturday:7:30am - 3:00pm</a>
                      </li>
                      <li>
                        <a href="/dashboard">Sunday:Closed</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom ">
          <div className="container mx-auto">
            <div className="footer-bottom__section-wrapper ">
              <p>
                &copy; 2021 <a href="index.html">Automobile</a> Designed by
                CallBack warriors{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
