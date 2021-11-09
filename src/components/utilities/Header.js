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
        <span className="header__container__logo lg:block ">
          <Link to="/">
            <a className="text-xl">
              <img src={Logo} alt="AUTOMOBILE" />
            </a>
          </Link>
        </span>

        <button
          className="header__container__button lg:hidden"
          onClick={toggleDrawer}
        >
          <FiMenu />
        </button>
        <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
          <div
            onClick={toggleDrawer}
            className="eader__container__drawer close"
          >
            <AiOutlineCloseSquare className="float-right" />
          </div>
          <MobileMenu />
        </Drawer>

        <nav className="header__container__nav md:ml-auto md:mr-auto lg:block">
          <Link to="/">
            <a>Home</a>
          </Link>

          <Link to="/courses">
            <a>Service</a>
          </Link>
          <Link to="/instractors">
            <a>Contact</a>
          </Link>

          <Link to="/categories">
            <a>Dashboard</a>
          </Link>
        </nav>

        <span className="header__container__cart">
          <Link to="/cart">
            <a>
              <span className="">
                <AiOutlineShoppingCart />
              </span>
            </a>
          </Link>
          <span className="header__container__cart__number translate-x-1/2 -translate-y-1/2 rounded-full bg-royal-blue">
            0
          </span>
        </span>

        <Link to="/login">
          <a>
            <button className="header__container__login">Login</button>
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
