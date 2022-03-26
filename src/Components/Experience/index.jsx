import React, { useContext } from "react";

import { LangContext } from "../../context/Language";
import Section from "../Section";
import Card from "./Card";

const Experience = () => {
  const { Experience } = useContext(LangContext);
  return (
    <Section
      title={Experience.title}
      subtitle={Experience.subtitle}
      id={Experience.id}
    >
      {Experience.cards.map(e => (
        <Card
          key={e.title}
          title={e.title}
          subtitle={e.charge}
          icon={e.icon}
          list={e.res}
          link={e.link}
        />
      ))}
    </Section>
  );
};

export default Experience;
