import React, { useContext } from "react";
import styled from "styled-components";

import theme from "../../styles/theme";
import { Button, Container } from "../../styles/commons";
import HeroText from "./HeroText";
import HeroTitle from "./HeroTitle";
import { LangContext } from "../../context/Language";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
  margin-top: 70px;
  @media (min-width: ${theme.breakpoints.md}) {
    max-width: ${props => (props.fluid ? "none" : "720px")};
  }
  @media (min-width: ${theme.breakpoints.lg}) {
    max-width: ${props => (props.fluid ? "none" : "1140px")};
  }
  @media (min-width: ${theme.breakpoints.xl}) {
    max-width: ${props => (props.fluid ? "none" : "1320px")};
  }
`;

const HeroSection = () => {
  const { name, Hero, About } = useContext(LangContext);

  return (
    <Section id={Hero.id}>
      <Container flex="column" centerC>
        <HeroText>{Hero.greeting}</HeroText>
        <HeroTitle>{name}</HeroTitle>
        <HeroText>{Hero.career}</HeroText>
      </Container>
      <Container fluid flex="column" centered lgRow>
        <Button
          small
          neon
          width="15rem"
          as="a"
          href={About.cv}
          download="Currículum Braian Delgado.pdf"
        >
          {Hero.cvBtn}
        </Button>
        <Button as="a" href={`#${About.id}`} filled width="15rem">
          {About.title}
        </Button>
      </Container>
    </Section>
  );
};

export default HeroSection;
