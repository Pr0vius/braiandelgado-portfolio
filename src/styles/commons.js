import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import theme from "./theme";

const { palette, size, breakpoints } = theme;

const Button = styled.button`
  background: ${props => (props.filled ? palette.primary : "none")};
  color: ${props => props.filled ? palette.text_secondary : palette.text_primary};
  text-decoration: none;
  text-align:center;
  outline: none;
  border: 2px solid ${palette.primary};
  border-radius: 5px;
  font-size: 1rem;
  margin: ${props => props.margin? props.margin : "1rem"};
  font-weight: 600;
  cursor: pointer;
  padding: ${size.btn.medium};
  ${props => props.small && css`padding: ${size.btn.small};`}
  ${props => props.xs && css`padding: .5rem;`}
  ${props => props.width && css`width: ${props.width};`}
  ${props => props.neon && css`box-shadow: 0 0 5px ${palette.primary}`}
  transition: transform .2s, box-shadow .2s;
  &:hover {
    box-shadow: 0 0 10px ${theme.palette.primary};
  }
  &:active{
    transform: scale(97%)
  }
  @media (min-width: ${breakpoints.md}) {
  }
  @media (min-width: ${breakpoints.lg}) {
  }
  @media (min-width: ${breakpoints.xl}) {
  }
`;

Button.propTypes = {
  filled: PropTypes.bool,
  small: PropTypes.bool,
  xs: PropTypes.bool,
  width: PropTypes.string,
  neon: PropTypes.bool,
  margin: PropTypes.string
};

const Container = styled.div`
  display: flex;
  width: ${props => props.fluid? "100%" : "90%"};
  padding: ${props => props.padding? props.padding : ".2rem"};
  flex-direction: ${props => props.flex ? props.flex : "row"};
  max-width: ${props => props.fluid ? "none" : "540px"};
  flex-wrap: wrap;
  ${props => props.gap && css`gap: ${props.gap};`}
  ${props => props.spaceBetween && css`justify-content: space-between;`}
  ${props => props.centerM && css`justify-content:center;`}
  ${props => props.centerC && css`align-items:center;`}
  ${props => props.centered && css`
    justify-content:center;
    align-items: center;`}
  margin: 0 auto;
  @media (min-width: ${breakpoints.md}) {
    max-width: ${props => props.fluid ? "none" : "720px"};
    ${props => props.mdWidth && css`width: ${props.mdWidth};`}
  }
  @media (min-width: ${breakpoints.lg}) {
    max-width: ${props => props.fluid ? "none" : "1140px"};
    ${props => props.lgRow && css`
      flex-direction: row;
      flex-wrap: nowrap;
    `}
    ${props => props.lgCenterM && css`
      justify-content: center;
      align-items: flex-start;
    `}
    ${props => props.lgWidthUnset && css`width: unset;`}
    ${props => props.lgGap && css`gap: ${props.lgGap};`}

  }
  @media (min-width: ${breakpoints.xl}) {
    max-width: ${props => props.fluid ? "none" : "1320px"};
  }
`;

Container.propTypes = {
  fluid: PropTypes.bool,
  content: PropTypes.bool,
  flex: PropTypes.oneOf(["column", "row"]),
  centered: PropTypes.bool,
  centerM: PropTypes.bool,
  centerC: PropTypes.bool,
  grid: PropTypes.bool,
  gap: PropTypes.string,
  gridColumns: PropTypes.number,
  gridRows: PropTypes.number,
  spaceBetween: PropTypes.bool,
  mdWidth: PropTypes.string,
  lgRow: PropTypes.bool,
  lgGap: PropTypes.string,
};

export {Container, Button};