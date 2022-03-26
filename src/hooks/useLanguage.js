import { useState, useEffect } from "react";

import data from "../config";

const useLanguage = () => {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const availableLanguages = Object.keys(data.lang);
    const querys = new URLSearchParams(window.location.search);

    if (querys.has("lang")) {
      const queryLang = querys.get("lang");
      if (availableLanguages.includes(queryLang)) {
        setLang(queryLang);
      }
    }
  }, []);
  
  return {
    update: setLang,
    name: data.name,
    ...data.lang[lang],
  };
};

export default useLanguage;
