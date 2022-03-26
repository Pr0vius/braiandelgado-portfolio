import React from "react";
import Helmet from "react-helmet";
import photo from "../../assets/img/1616855391242.jpeg";

const Head = () => {
  return (
    <Helmet>
      <meta
        property="og:title"
        content="Braian Delgado | Fullstack Developer"
      />
      <meta
        name="description"
        content="This is my portfolio, where I show my projects and experiences to the world."
      />
      <meta
        property="og:url"
        content="https://braiandelgado-portfolio.vercel.app/"
      />
      <meta property="og:image" content={photo} />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default Head;
