import React, { FC, useState } from "react";

//*types
import { HeaderProps } from "./types.services";

/*let toggle = "text-gray-700";*/
let moveButtonTheme = "-left-1";

export const Header: FC<HeaderProps> = ({
  titleInitial,
  title,
  theme,
  setTheme,
  setLanguage,
  ...props
}) => {
  const handleClick = (e: any) => {
    if (e.target.checked) {
      setTheme?.("invert");
      /*toggle = "text-white";*/
      moveButtonTheme = "left-5";
    } else {
      setTheme?.("invert-0");
      /*toggle = "text-black";*/
      moveButtonTheme = "-left-1";
    }
  };

  const handleLanguage = (e: any) => {
    e.target.value === "Choose a language" ? "" : setLanguage?.(e.target.value);
  };

  return (
    <header className={theme}>
      <h2 className="text-red-600">{title}</h2>
      <h3>{titleInitial}</h3>
      <>
        <select
          onChange={handleLanguage}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose a language</option>
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
      </>
      <br />
      <>
        <div className="flex items-center justify-center">
          <div className="flex items-center">
            <input
              id="toogleA"
              type="checkbox"
              className="hidden"
              onClick={handleClick}
            />
            <label
              htmlFor="toogleA"
              className="flex items-center cursor-pointer"
            >
              <div className="relative">
                <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                <div
                  className={`dot absolute w-6 h-6 bg-white rounded-full shadow ${moveButtonTheme} -top-1 transition
                `}
                ></div>
              </div>
              {/*${toggle}*/}
              <div className={`ml-3   text-gray-100   font-medium`}>
                {theme === "invert-0" ? "Light" : "Dark"}
              </div>
            </label>
          </div>
        </div>
      </>
      <br />
      <br />
    </header>
  );
};
