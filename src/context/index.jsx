import React from "react";
import PropTypes from "prop-types";

import LangProvider from "./Language";

const Providers = ({ children }) => {
  return <LangProvider>{children}</LangProvider>;
};
Providers.propTypes = {
  children: PropTypes.node,
};

export default Providers;
