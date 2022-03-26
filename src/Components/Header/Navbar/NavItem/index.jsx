import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import theme from "../../../../styles/theme";

const Item = styled.li``;
export const Anchor = styled.a`
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.2s;
  color: ${props =>
    props.dark ? theme.palette.text_secondary : theme.palette.text_primary};
  padding: 0.5rem 0;
  &:hover {
    color: ${props =>
      props.dark ? theme.palette.text_gray : theme.palette.primary};
  }
`;

const NavItem = ({ to, text, onClick: click }) => {
  return (
    <Item>
      <Anchor onClick={click} href={`#${to}`}>
        {text}
      </Anchor>
    </Item>
  );
};

NavItem.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default NavItem;
