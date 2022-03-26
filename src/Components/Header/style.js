import styled from "styled-components";

import theme from "../../styles/theme";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${theme.palette.bg_secondary};
  width: 100vw;
  max-width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  z-index: 1000;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  overflow: hidden;
  justify-content: space-between;
`;

export default Header;
