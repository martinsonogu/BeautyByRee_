import React, { useState } from "react";
import COLORS from "../../constants/colors";
import { NavLink, NavLinkProps } from "react-router-dom";
import { Link } from "react-router-dom";
import CurrencySelector from "../CurrencySelector/CurrencySelector";

const Navbar = () => {
  interface LinkProps {
    isActive: boolean;
    onClick: () => void;
    children: React.ReactNode;
  }

  function Link({ isActive, onClick, children }: LinkProps) {
    const color = isActive ? COLORS.pureBlack : COLORS.primaryColor;
    const textDecoration = "none";
    const margin = "0 10px";

    return (
      <a href="#" onClick={onClick} style={{ color, textDecoration, margin }}>
        {children}
      </a>
    );
  }
  interface CustomNavLinkProps extends NavLinkProps {
    exact?: boolean;
    activeClassName?: string;
  }

  const [activeLink, setActiveLink] = useState<number>(0);
  return (
    <div className="w-screen h-48 bg-pureWhite">
      <div className="w-screen px-40 h-36 flex justify-center items-center">
        <div className="w-screen flex justify-between  align-middle">
          <div>
            <CurrencySelector />
          </div>
          <div className="">
            <p>logo</p>
          </div>
          <div>
            <Link isActive={activeLink === 0} onClick={() => setActiveLink(0)}>
              Account
            </Link>
            <Link isActive={activeLink === 1} onClick={() => setActiveLink(1)}>
              Search
            </Link>
            <Link isActive={activeLink === 2} onClick={() => setActiveLink(2)}>
              Cart (0)
            </Link>
          </div>
        </div>
      </div>
      <hr className="border-grey" />
      <div className="flex justify-center items-center h-11">
        <NavLink
          className="mr-24"
          //activeClassName="is-active"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="mr-24"
          //activeClassName="is-active"
          to="/about"
        >
          About Us
        </NavLink>
        <NavLink
          className="mr-24"
          //activeClassName="is-active"
          to="/shop"
        >
          Shop
        </NavLink>
        <NavLink
          className="navbar-item"
          //activeClassName="is-active"
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
