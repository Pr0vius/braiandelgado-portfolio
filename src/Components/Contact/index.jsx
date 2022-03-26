import React, { useContext } from "react";

import { LangContext } from "../../context/Language";
import Section from "../Section";
import { Container } from "../../styles/commons";
import { ContactButton } from "./style";

const Contact = () => {
  const { Contact } = useContext(LangContext);
  return (
    <Section title={Contact.title} subtitle={Contact.subtitle} id={Contact.id}>
      <Container gap="2rem" centered wrap="nowrap">
        {Contact.means?.map(e => (
          <ContactButton key={e.name} href={e.url} target="_blank">
            <e.icon />
          </ContactButton>
        ))}
      </Container>
    </Section>
  );
};

export default Contact;
