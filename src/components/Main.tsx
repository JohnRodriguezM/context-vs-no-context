import React, { FC } from "react";
//*types
import {MainProps} from './types.services'

export const Main: FC<MainProps> = ({
  title,
  theme,
  setTheme,
  children,
  ...props
}: any) => {
  return (
    <main className={theme}>
      {children}
      <br />
    </main>
  );
};
