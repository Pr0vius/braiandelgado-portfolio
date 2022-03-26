import styled from "styled-components";

import theme from "../../../../styles/theme";

const NavList = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: ${theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

export default NavList;
