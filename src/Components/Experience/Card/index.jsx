import React from "react";
import propTypes from "prop-types";

import { Button } from "../../../styles/commons";
import {
  CardContainer,
  CardList,
  CardTitle,
  CardSubtitle,
  CardTitleLogo,
  CardListItem,
} from "./style";

const Card = ({ title, subtitle, icon, list, link }) => {
  return (
    <CardContainer>
      <CardTitle>
        <CardTitleLogo src={icon} alt={title} />
        {title}
      </CardTitle>
      <CardSubtitle>{subtitle}</CardSubtitle>
      <CardList>
        {list.map((e, i) => (
          <CardListItem key={i}>{e}</CardListItem>
        ))}
      </CardList>
      <Button width="60%" xs neon as="a" href={link} target="_blank">
        Check
      </Button>
    </CardContainer>
  );
};

Card.propTypes = {
  title: propTypes.string,
  subtitle: propTypes.string,
  icon: propTypes.string,
  list: propTypes.array,
  link: propTypes.string,
};
export default Card;
