import styled, { css } from "styled-components";

import theme from "../../../styles/theme";

const Nav = styled.nav`
  @media (max-width: ${theme.breakpoints.md}) {
    width: 200px;
    height: calc(100vh - 70px);
    position: fixed;
    left: 100vw;
    top: 70px;
    background-color: ${theme.palette.bg_secondary};
    transition: transform 0.2s;
    padding: 1rem;
    ${props =>
      props.active &&
      css`
        transform: translateX(-100%);
      `};
  }
`;

export default Nav;
