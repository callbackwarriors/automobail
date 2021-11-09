/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from "assets/images/log.png";
import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  return (
    <div className="p-4">
      <Link to="/">
        <a className="text-xl">
          <img src={Logo} alt="AUTOMOBILE" />
        </a>
      </Link>

      <ul className="mobile-menu">
        <li>
          <Link to="/">
            <a>Courses</a>
          </Link>
        </li>
        <li>
          <Link to="/">
            <a>Instractors</a>
          </Link>
        </li>
        <li>
          <Link to="/">
            <a>Categories</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
