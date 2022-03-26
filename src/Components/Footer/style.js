import styled from "styled-components";

import theme from "../../styles/theme";

const FooterContainer = styled.footer`
  background-color: ${theme.palette.primary};
  padding: 1rem;
  text-align: center;
  color: ${theme.palette.text_secondary};
  margin-top: 5rem;
`;
const Ul = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
`;
const Li = styled.li`
  color: ${theme.palette.text_secondary};
`;
export { FooterContainer, Ul, Li };
