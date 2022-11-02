import React, { FC, useContext } from "react";

import { FooterProps } from "../types.services";

import { ThemeContext } from "../../context/ThemeContext";
export const FooterContext: FC<FooterProps> = ({ footerTitle, ...props }) => {
  const { theme, handleClickTheme } = useContext(ThemeContext);

  return (
    <footer className={theme}>
      <h3>{footerTitle || "my footer"}</h3>
    </footer>
  );
};
