import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  VertcLine,
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const clickHandler = (e) => {
    if (e) {
      // navigate back
      navigate(-1);
      setIsOpen(false);
    } else {
      // open the menu
      navigate("/menu");
      setIsOpen(true);
    }
  };

  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src="logo.png" alt="logo" />
        </NavLink>
        <Bars onClick={() => clickHandler(isOpen)} />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/services" activeStyle>
            Services
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            Contact
          </NavLink>
          <NavLink to="/about" activeStyle>
            About Us
          </NavLink>
        </NavMenu>
        <NavMenu>
          <VertcLine />

          <NavLink to="/sign-in" activeStyle>
            {" "}
            LOG IN{" "}
          </NavLink>
          <NavBtn>
            <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
