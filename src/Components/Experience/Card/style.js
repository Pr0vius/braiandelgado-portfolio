import styled from "styled-components";

import theme from "../../../styles/theme";

const CardContainer = styled.div`
  width: 100%;
  background-color: ${theme.palette.bg_secondary};
  border-radius: 15px;
  width: 20rem;
  max-width: 100%;
  height: 15rem;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const CardTitle = styled.h4`
  margin: 0;
  font-weight: 400;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const CardSubtitle = styled.span`
  color: ${theme.palette.text_secondary};
`;
const CardTitleLogo = styled.img`
  height: 2rem;
`;
const CardList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: .3rem;
`;
const CardListItem = styled.li`
  color: ${theme.palette.primary};
`;
export {
  CardContainer,
  CardTitle,
  CardList,
  CardTitleLogo,
  CardSubtitle,
  CardListItem,
};
