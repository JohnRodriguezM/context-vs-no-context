import React, { useState, FC } from "react";
import { FooterContext } from "../../components/contextComponents/FooterContext";
import { HeaderContext } from "../../components/contextComponents/HeaderContext";
import { MainContext } from "../../components/contextComponents/MainContext";
import { ThemeProvider } from "../../context/ThemeContext";

//*context API

//invert
export const WithContext: FC = () => {
  return (
    //lo podria colocar en el div de abajo pero no tendria sentido sin usar la context api  --- ${theme}
    <ThemeProvider>
      <div className={` text-base font-bold`}>
        <HeaderContext
          title=" dark and white theme with context API "
        />
        <hr />
        <MainContext>
          <h2 className="text-white">Bienvenido invitad@</h2>
          <h2>Bienvenido user</h2>
          <p className="text-white">Mi contenido principal</p>
        </MainContext>
        <hr />
        <FooterContext />
      </div>
    </ThemeProvider>
  );
};
