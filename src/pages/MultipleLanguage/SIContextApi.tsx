import React, { useState, FC, useContext } from "react";
import { FooterContext } from "../../components/contextComponents/FooterContext";
import { HeaderContext } from "../../components/contextComponents/HeaderContext";
import { MainContext } from "../../components/contextComponents/MainContext";
import { ThemeProvider } from "../../context/ThemeContext";
import {
  LanguageProvider,
  LanguageContext,
} from "../../context/LanguageContext";
/*import {translationContext} from './MultipleLanguage.services'*/
/*
const initialTheme = "invert-0";
const initalLanguage = "es";*/

export const SIContextApi = () => {
  /*const [language, setLanguage] = useState(initalLanguage);
  const { mainTitle, header: {title, titleInitial}, main: {welcome, content,welcomeUser}, footer: {copy} } = translationContext[language];*/

  const { mainTitle, welcome, welcomeUser, content } =
    useContext(LanguageContext);

  return (
    <LanguageProvider value={{
      mainTitle,
      welcome,
      welcomeUser,
      content,
    }}>
      <ThemeProvider>
        <div className={` text-base font-bold`}>
          <h2>{mainTitle}</h2> <br />
          <br />
          <HeaderContext />
          <hr />

                <h2 className="text-white">{welcome}</h2>
                {/*<h2>{welcomeUser}</h2>
                <p className="text-white">{content}</p>*/}
              
          <hr />
          <FooterContext />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
};
