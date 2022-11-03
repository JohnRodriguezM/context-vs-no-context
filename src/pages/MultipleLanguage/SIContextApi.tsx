import React, { useState, FC, useContext } from "react";
import { FooterContext } from "../../components/contextComponents/FooterContext";
import { HeaderContext } from "../../components/contextComponents/HeaderContext";
import { MainContext } from "../../components/contextComponents/MainContext";
import {
  LanguageContext,
} from "../../context/LanguageContext";

export const SIContextApi = () => {
  const { mainTitle, welcome, welcomeUser, content } =
    useContext(LanguageContext);

  return (
    <div className={` text-base font-bold`}>
      <h2>{mainTitle}</h2> <br />
      <br />
      <hr />
      <HeaderContext />
      <MainContext>
        <h2>{welcomeUser}</h2>
        <p className="text-white">{content}</p>
        <h2 className="text-white">{welcome}</h2>
      </MainContext>
      <hr />
      <FooterContext />
    </div>
  );
};
