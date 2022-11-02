import { createContext, useState } from "react";
import { translationContext } from "../pages/MultipleLanguage/MultipleLanguage.services";

export const LanguageContext = createContext({
  mainTitle: "",
  title: "",
  titleInitial: "",
  welcome: "",
  content: "",
  welcomeUser: "",
  copy: "",
  handleLanguage: (e: any) => {}
});

const initialLanguage = "es";
export const LanguageProvider = ({ children }: any) => {

  const [language, setLanguage] = useState(initialLanguage);
  const {
    mainTitle,
    header: { title, titleInitial },
    main: { welcome, content, welcomeUser },
    footer: { copy },
  } = translationContext[language];

  const handleLanguage = (e: any) => {
    e.target.value === "Choose a language" ? "" : setLanguage?.(e.target.value);
  };

  const dataValues = {
    mainTitle,
    title,
    titleInitial,
    welcome,
    content,
    welcomeUser,
    copy,
    handleLanguage,
  }

  return (
    <LanguageContext.Provider value={dataValues}>
      {children}
    </LanguageContext.Provider>
  );
};
