/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from "assets/images/log.png";
import React from "react";
import { AiOutlineCloseSquare, AiOutlineShoppingCart } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
// import Usermenu from "./Usermenu";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header className="header">
      <div className="header__container">
        <span className="flex items-center hidden mb-4 font-medium text-gray-900 lg:block md:mb-0">
          <Link to="/">
            <a className="text-xl">
              <img src={Logo} alt="AUTOMOBILE" />
            </a>
          </Link>
        </span>

        <button
          className="inline-block text-3xl lg:hidden"
          onClick={toggleDrawer}
        >
          <FiMenu />
        </button>
        <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
          <div
            onClick={toggleDrawer}
            className="p-3 overflow-hidden text-2xl text-right close text-royal-blue"
          >
            <AiOutlineCloseSquare className="float-right" />
          </div>
          <MobileMenu />
        </Drawer>

        <nav className="flex flex-wrap items-center justify-center hidden text-base md:ml-auto md:mr-auto lg:block">
          <Link to="/">
            <a className="mr-5 hover:text-gray-900">Home</a>
          </Link>

          <Link to="/courses">
            <a className="mr-5 hover:text-gray-900">Service</a>
          </Link>
          <Link to="/instractors">
            <a className="mr-5 hover:text-gray-900">Contact</a>
          </Link>

          <Link to="/categories">
            <a className="mr-5 hover:text-gray-900">Dashboard</a>
          </Link>
        </nav>

        <span className="relative inline-block mr-6">
          <Link to="/cart">
            <a>
              <span className="text-xl cart__ico">
                <AiOutlineShoppingCart />
              </span>
            </a>
          </Link>
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 rounded-full bg-royal-blue">
            0
          </span>
        </span>

        <Link to="/login">
          <a>
            <button className="inline-flex items-center px-3 py-1 text-base bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200 md:mt-0 font-bold">
              Login
            </button>
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
