import React, { useContext } from "react";

import { LangContext } from "../../context/Language";
import { Container } from "../../styles/commons";
import { FooterContainer, Li, Ul } from "./style";
import { ContactButton } from "../Contact/style";
import { Anchor } from "../Header/Navbar/NavItem";
const Footer = () => {
  const { name, Hero, About, Experience, Portfolio, Contact } =
    useContext(LangContext);
  return (
    <FooterContainer>
      <h2>{name}</h2>
      <Container centered wrap="nowrap" gap="1rem">
        {Contact.means?.map(e => (
          <ContactButton
            small
            secondary
            href={e.url}
            key={e.name}
            target="_blank"
          >
            <e.icon />
          </ContactButton>
        ))}
      </Container>
      <Ul>
        <Li>
          <Anchor href={`#${Hero.id}`} dark>
            {Hero.title}
          </Anchor>
        </Li>
        <Li>
          <Anchor href={`#${About.id}`} dark>
            {About.title}
          </Anchor>
        </Li>
        <Li>
          <Anchor href={`#${Experience.id}`} dark>
            {Experience.title}
          </Anchor>
        </Li>
        <Li>
          <Anchor href={`#${Portfolio.id}`} dark>
            {Portfolio.title}
          </Anchor>
        </Li>
        <Li>
          <Anchor href={`#${Contact.id}`} dark>
            {Contact.title}
          </Anchor>
        </Li>
      </Ul>
    </FooterContainer>
  );
};

export default Footer;
