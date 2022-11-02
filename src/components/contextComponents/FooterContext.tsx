import React, { FC, useContext } from "react";

import { FooterProps } from "../types.services";

import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext} from "../../context/LanguageContext"


export const FooterContext: FC<FooterProps> = ({ ...props }) => {
  const { theme, handleClickTheme } = useContext(ThemeContext);
  const { copy } =
  useContext(LanguageContext);
  return (
    <footer className={theme}>
      <h3>{copy || "my footer"}</h3>
    </footer>
  );
};
