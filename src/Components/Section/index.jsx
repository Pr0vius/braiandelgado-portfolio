import PropTypes from "prop-types";
import React from "react";

import {
  SectionContainer,
  SectionHeader,
  SectionSubtitle,
  SectionTitle,
} from "./styles";

const Section = ({ title, children, subtitle, id }) => {
  return (
    <SectionContainer id={id}>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        <SectionSubtitle>{subtitle}</SectionSubtitle>
      </SectionHeader>
      {children}
    </SectionContainer>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
