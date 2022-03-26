import React, { useContext } from "react";

import { LangContext } from "../../context/Language";
import Section from "../Section";
import { Image, P } from "./styles";
import { Button, Container } from "../../styles/commons";
import Cards from "./Card";

const About = () => {
  const { About, Contact, name } = useContext(LangContext);

  return (
    <Section id={About.id} title={About.title} subtitle={About.subtitle}>
      <Container fluid flex="column" gap="2rem" mdWidth="77%">
        <Container fluid centered lgRow lgCenterM lgGap="1.5rem">
          <Image src={About.img} alt={name} />
          <P>{About.description}</P>
        </Container>
        <Container fluid centered gap="1rem">
          <Cards content={About.technologies} />
          <Button filled as="a" href={`#${Contact.id}`}>
            {About.contactBtn}
          </Button>
        </Container>
      </Container>
    </Section>
  );
};

export default About;
