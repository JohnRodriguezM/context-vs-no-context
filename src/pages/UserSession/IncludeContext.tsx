import React, { useState, FC, useContext } from "react";
import { FooterContext } from "../../components/contextComponents/FooterContext";
import { HeaderContext } from "../../components/contextComponents/HeaderContext";
import { MainContext } from "../../components/contextComponents/MainContext";
import { LanguageContext } from "../../context/LanguageContext";
import { AuthContext } from "../../context/LoginUserContext";

export const IncludeContext = () => {
  const { mainTitle, welcome, welcomeUser, content } =
    useContext(LanguageContext);

  const { auth, handleAuth } = useContext(AuthContext);
  return (
    <div className={` text-base font-bold`}>
      <h2>{mainTitle}</h2> <br />
      <br />
      <hr />
      <HeaderContext />
      <MainContext>
        {auth ? (
          <>
            <h3>{welcomeUser}</h3>
            <button onClick={handleAuth}>Logout</button>
          </>
        ) : (
          <>
            <h3>{welcome}</h3>
            <p>{content}</p>
            <button onClick={handleAuth}>Login</button>
          </>
        )}
      </MainContext>
      <hr />
      <FooterContext />
    </div>
  );
};
