import { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: "",
  handleClickTheme: (e: any) => {},
  move: "",
});

//*button switch checkbox theme color
const initialTheme = "invert-0";

export const ThemeProvider = ({ children }: any) => {
  let moveButtonTheme = "-left-1";
  const [theme, setTheme] = useState(initialTheme);
  const [move, setMove] = useState("-left-1");

  const handleClickTheme = (e: any): any => {
    if (e.target.checked) {
      setTheme?.("invert");
      setMove("left-5");
    } else {
      setTheme?.("invert-0");
      setMove("-left-1");
    }
  };
  const data = {
    theme,
    handleClickTheme,
    move,
  };

  return (
    <ThemeContext.Provider value={data}>
      {children}
    </ThemeContext.Provider>
  );
};
