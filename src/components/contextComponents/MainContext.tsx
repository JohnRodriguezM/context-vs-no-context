import React, { FC, useContext } from "react";
//*types
import { MainProps } from "../types.services";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";

export const MainContext: FC<MainProps> = ({
  title,
  children,
  ...props
}: any) => {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={theme}>
      {children}
      <br />
    </main>
  );
};
