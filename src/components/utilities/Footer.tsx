/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { MdCall, MdLocationPin, MdTrackChanges } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative footer">
      <div className="footer__top">
        <div className="footer__top__around">
          <div className="flex items-center gap-4">
            <MdLocationPin />
            <p>
              Tucson, AZ 80210: <br />
              501 Archwood Lane
            </p>
          </div>
          <div className="flex items-center gap-4">
            <MdCall />
            <p>
              Tucson, AZ 80210: <br />
              501 Archwood Lane
            </p>
          </div>
          <div className="flex items-center gap-4">
            <MdTrackChanges />
            <p>
              Tucson, AZ 80210: <br />
              501 Archwood Lane
            </p>
          </div>
        </div>
      </div>

      <div className="footer-middle">
        <div className="container mx-auto">
          <div className="footer-middle__section ">
            <div className="footer-content">
              <div className="footer-middle__section--title">
                <h4>ABOUT US</h4>
              </div>
              <div className="footer-middle__section--content">
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

                <ul className="footer-middle__social-icons">
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
                <div className="footer-middle__section--title ">
                  <h4>OUR SERVICES</h4>
                </div>
                <div className="footer-middle__section--content ">
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
                <div className="footer-middle__section--title ">
                  <h4>HOURS</h4>
                </div>
                <div className="footer-middle__section--content ">
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
          <div className="footer__bottom__section-wrapper ">
            <p>
              &copy; 2021 <a href="index.html">Automobile</a> Designed by
              CallBack warriors{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
