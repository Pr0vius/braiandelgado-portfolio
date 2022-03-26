import styled from "styled-components";

import theme from "../../../styles/theme";

const NavBrand = styled.a`
  font-size: 1.4rem;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s, transform 0.2s;
  color: ${theme.palette.text_primary};
  &:hover {
    color: ${theme.palette.primary};
    transform: scale(120%);
  }
`;

export default NavBrand;
