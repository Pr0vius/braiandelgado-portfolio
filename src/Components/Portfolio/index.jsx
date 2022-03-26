import React, { useContext } from "react";

import { LangContext } from "../../context/Language";
import Section from "../Section";
import { Button, Container } from "../../styles/commons";
import { Card, ProjectThumbnail, ProjectTitle, GithubIcon } from "./styles";

const Portfolio = () => {
  const { Portfolio } = useContext(LangContext);
  return (
    <Section
      title={Portfolio.title}
      subtitle={Portfolio.subtitle}
      id={Portfolio.id}
    >
      <Container fluid centered gap="1.5rem">
        {Portfolio.projects?.map(e => (
          <Card key={e.title}>
            <ProjectTitle>{e.title}</ProjectTitle>
            <ProjectThumbnail src={e.thumbnail} alt={e.title} />
            <Container fluid padding={0} spaceBetween centerC>
              <Button
                width="60%"
                xs
                neon
                as="a"
                href={e.link}
                target="_blank"
                margin="0"
              >
                Check
              </Button>
              <a href={e.repository} target="_blank" rel="noreferrer">
                <GithubIcon />
              </a>
            </Container>
          </Card>
        )).reverse()}
      </Container>
    </Section>
  );
};

export default Portfolio;

