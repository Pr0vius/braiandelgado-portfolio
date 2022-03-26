import styled from "styled-components";

import theme from "../../styles/theme";

const ContactButton = styled.a`
  width: ${props => (props.small ? "3rem" : "6rem")};
  height: ${props => (props.small ? "2.5rem" : "5.5rem")};
  background-color: ${props =>
    props.secondary ? theme.palette.bg_primary : theme.palette.bg_secondary};
  padding: 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => (props.small ? "1.2rem" : "2rem")};
  transition: box-shadow 0.2s;
  color: ${props =>
    props.secondary ? theme.palette.primary : theme.palette.text_gray};
  &:hover {
    box-shadow: 0 0 10px ${theme.palette.primary};
  }
  &:active{
    scale: 95%
  }
`;

export { ContactButton };
