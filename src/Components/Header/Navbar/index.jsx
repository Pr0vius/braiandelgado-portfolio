import React, { useContext } from "react";
import PropTypes from "prop-types";

import { LangContext } from "../../../context/Language";
import Overlay from "../Overlay";
import Nav from "./style";
import NavList from "./NavList";
import NavItem from "./NavItem";

const Navbar = ({ active, click }) => {
  const { Hero, About, Experience, Portfolio, Contact } =
    useContext(LangContext);
  return (
    <>
      <Overlay active={active} onClick={click} />
      <Nav active={active}>
        <NavList>
          <NavItem to={Hero.id} text={Hero.title} onClick={click} />
          <NavItem to={About.id} text={About.title} onClick={click} />
          <NavItem to={Experience.id} text={Experience.title} onClick={click} />
          <NavItem to={Portfolio.id} text={Portfolio.title} onClick={click} />
          <NavItem to={Contact.id} text={Contact.title} onClick={click} />
        </NavList>
      </Nav>
    </>
  );
};

Navbar.propTypes = {
  active: PropTypes.bool,
  click: PropTypes.func,
};

export default Navbar;
