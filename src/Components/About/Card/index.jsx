import React from "react";
import PropTypes from "prop-types";

import { Container } from "../../../styles/commons";
import { Card } from "./style";

const Cards = ({ content }) => {
  return (
    <Container gap="1rem" fluid centered>
      {content?.map(e => (
        <Card key={e.title}>
          <e.logo />
        </Card>
      ))}
    </Container>
  );
};
Cards.propTypes = {
  content: PropTypes.array,
};
export default Cards;
