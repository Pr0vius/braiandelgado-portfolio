import styled from "styled-components";

import theme from "../../styles/theme";

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 2rem auto;
  padding: 0;
  gap: 2rem;
  max-width: 540px;
  @media (min-width: ${theme.breakpoints.md}) {
    max-width: 720px;
  }
  @media (min-width: ${theme.breakpoints.lg}) {
    max-width: 1140px;
  }
  @media (min-width: ${theme.breakpoints.xl}) {
    max-width: 1320px;
  }
`;
const SectionHeader = styled.div`
  width: 100%;
`;
const SectionTitle = styled.h2`
  width: 100%;
  text-align: center;
  color: ${theme.palette.primary};
  text-shadow: 0px 0px 25px ${theme.palette.primary};
  margin: 1rem 0 0.1rem 0;
  font-size: 1.8rem;
`;
const SectionSubtitle = styled.span`
  display: block;
  text-align: center;
  color: ${theme.palette.text_secondary};
  font-size: 1.1rem;
`;
export { SectionContainer, SectionHeader, SectionTitle, SectionSubtitle };
