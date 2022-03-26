import styled, { css } from "styled-components";

import theme from "../../../styles/theme";

const Overlay = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  width: 0;
  height: 0;
  transition: backdrop-filter 0.2s, background-color 0.2s;
  @media (max-width: ${theme.breakpoints.md}) {
    ${props =>
      props.active &&
      css`
        background-color: #000000aa;
        width: 100vw;
        height: calc(100vh - 70px);
        backdrop-filter: blur(3px);
      `}
  }
`;

export default Overlay;
