import React, {FC} from "react";

import {FooterProps} from './types.services'

export const Footer: FC<FooterProps> = ({
  theme,
  ...props
}) => {
  return (
    <footer className = {theme}>
      <h3>Mi footer</h3>
    </footer>
  );
};
