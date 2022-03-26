import styled from "styled-components";

import theme from "../../styles/theme";

const Image = styled.img`
  max-width: 320px;
  width: 90vw;
  max-height: 320px;
  height: 90vw;
  object-fit: cover;
  border-radius: 30px;
  padding: 10px;
`;
const P = styled.p`
  text-align: center;
  line-height: 1.5rem;
  font-size: 1.1rem;
  color: ${theme.palette.text_gray};
`;

export { Image, P };
