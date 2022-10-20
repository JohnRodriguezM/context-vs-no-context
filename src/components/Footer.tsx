import React, {FC} from "react";

import {FooterProps} from './types.services'



export const Footer: FC<FooterProps> = ({
  footerTitle,
  theme,
  ...props
}) => {
  return (
    <footer className = {theme}>
      <h3>{footerTitle || "my footer"}</h3>
    </footer>
  );
};
