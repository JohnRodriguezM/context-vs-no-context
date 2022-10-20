import React, { useState, FC } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";

import { translation } from "../MultipleLanguage/MultipleLanguage.services";

const initialTheme = "invert-0";
const initalLanguage = "es";
export const NoIncludeContext = () => {
  const [theme, setTheme] = useState(initialTheme);
  const [language, setLanguage] = useState(initalLanguage);
  const {
    mainTitle,
    header: { title, titleInitial },
    main: { welcome, content, welcomeUser },
    footer: { copy },
  } = translation[language];

  const [auth, setAuth] = useState<boolean>(false);

  return (
    <div className={` text-base font-bold`}>
      <h2>{mainTitle}</h2> <br />
      <br />
      <Header
        titleInitial={titleInitial}
        title={title}
        setLanguage={setLanguage}
        {...{ theme, setTheme }}
      />
      <hr />
      <Main theme={theme}>
        {auth ? (
          <>
            <h3>{welcomeUser}</h3>
            <button onClick={() => setAuth(false)}>Logout</button>
          </>
        ) : (
          <>
            <h3>{welcome}</h3>
            <p>{content}</p>
            <button onClick={() => setAuth(true)}>Login</button>
          </>
        )}
        {/* <h2 className="text-white">{welcome}</h2>
        <h2>{welcomeUser}</h2>
        <p className="text-white">{content}</p>*/}
      </Main>
      <hr />
      <Footer theme={theme} footerTitle={copy} />
    </div>
  );
};
