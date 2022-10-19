import React, { useState, FC } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";

//invert
export const WithOutContext: FC = () => {
  const initialTheme = "invert-0";
  const [theme, setTheme] = useState(initialTheme);
  return (
    //lo podria colocar en el div de abajo pero no tendria sentido sin usar la context api  --- ${theme}
    <div className={` text-base font-bold`}>
      <Header
        title=" dark and white theme with out context API "
        {...{ theme, setTheme }}
      />
      <hr />
      <Main theme = {theme}      
      >
        <h2 className="text-white">Bienvenido invitad@</h2>
        <h2>Bienvenido user</h2>
        <p className="text-white">Mi contenido principal</p>
      </Main>
      <hr />
      <Footer 
      theme = {theme}
      />
    </div>
  );
};
