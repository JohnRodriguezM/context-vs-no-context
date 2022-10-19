import React, { FC } from "react";

interface PropsMain {
  theme?: string;
  setTheme?: Function;
  title?: string;
  children?: JSX.Element | JSX.Element[] | string | string[] | React.ReactElement | React.ReactElement[] | React.ReactNode | React.ReactNode[];
}

export const Main: FC<PropsMain> = ({
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
