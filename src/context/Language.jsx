import React, { createContext } from "react";
import PropTypes from "prop-types";

import useLanguage from "../hooks/useLanguage";

export const LangContext = createContext();

const LangProvider = ({ children }) => {
  const info = useLanguage();
  return <LangContext.Provider value={info}>{children}</LangContext.Provider>;
};
LangProvider.propTypes = {
  children: PropTypes.node,
};

export default LangProvider;
