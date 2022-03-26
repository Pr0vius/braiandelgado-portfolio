import styled, {css} from "styled-components";

import theme from "../../styles/theme";

const HeroText = styled.p`
  font-size: 1.2rem;
  ${props => props.color && css`
    color: ${theme.palette.primary};
  `}
`;

export default HeroText;