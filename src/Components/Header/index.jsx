import React, { useState, useEffect } from "react";

import { Container } from "../../styles/commons";
import Hdr from "./style";
import NavBrand from "./NavBrand";
import Navbar from "./Navbar";
import BurgerMenu from "./BurgerMenu";
import theme from "../../styles/theme";

const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  });

  const handleClick = () => {
    if (window.screen.width < Number(theme.breakpoints.md.split("px")[0])) {
      setActive(!active);
    }
  };
  return (
    <Hdr>
      <Container centerC spaceBetween>
        <NavBrand href="#">&lt;Braian /&gt;</NavBrand>
        <Navbar active={active} click={handleClick} />
        <BurgerMenu click={handleClick} active={active} />
      </Container>
    </Hdr>
  );
};

export default Header;
