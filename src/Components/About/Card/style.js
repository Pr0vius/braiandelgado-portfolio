import styled from "styled-components";

import theme from "../../../styles/theme";

const Card = styled.div`
  background-color: ${theme.palette.bg_secondary};
  width: 9rem;
  height: 7rem;
  padding: 0.5rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export { Card };
