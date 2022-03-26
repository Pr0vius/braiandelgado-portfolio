import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import theme from "../../../styles/theme";

const Button = styled.button`
  position: absolute;
  right: 5vw;
  padding: 0.5rem;
  width: 3rem;
  height: 2.5rem;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  border: none;
  &::before,
  ::after {
    display: block;
    content: "";
    width: 2rem;
    height: 0.3rem;
    background-color: #fff;
    border-radius: 2px;
    position: absolute;
    transition: transform 0.3s;
  }
  &::before {
    top: 0.6rem;
  }
  &::after {
    bottom: 0.6rem;
  }
  ${props =>
    props.active &&
    css`
      &::before,
      ::after {
        background-color: ${theme.palette.primary};
        top: 50%;
      }
      &::before {
        transform: rotate(135deg);
      }
      &::after {
        transform: rotate(-135deg);
      }
    `}
  @media (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const BurgerMenu = ({ click, active }) => {
  return <Button active={active} onClick={click}></Button>;
};
BurgerMenu.propTypes = {
  click: PropTypes.func,
  active: PropTypes.bool,
};

export default BurgerMenu;
