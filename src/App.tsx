import { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Home } from "./pages/Home/Home";

import { WithOutContext } from "./pages/WhiteBlackTheme/WithOutContext";
import { WithContext } from "./pages/WhiteBlackTheme/WithContext";

import { NoContextApi } from "./pages/MultipleLanguage/NoContextApi";
import { SIContextApi } from "./pages/MultipleLanguage/SIContextApi";

import { IncludeContext } from "./pages/UserSession/IncludeContext";
import { NoIncludeContext } from "./pages/UserSession/NoIncludeContext";

import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/LoginUserContext";

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <LanguageProvider>
          <div className="App">
            <Router basename={""}>
              <Routes>
                <Route path="/" element={<Home />} />

                {/*with --OUT-- context api dark - light*/}
                <Route
                  path="/whiteBlackWithOutContext"
                  element={<WithOutContext />}
                />
                {/*with context api dark - light*/}
                <Route
                  path="/whiteBlackWithContext"
                  element={<WithContext />}
                />

                {/*with --OUT-- context api multi language*/}
                <Route
                  path="/multipleLanguageWithOutContext"
                  element={<NoContextApi />}
                />
                {/*with context api multi language*/}
                <Route
                  path="/multipleLanguageWithContext"
                  element={<SIContextApi />}
                />
                {/*with --OUT-- context api user session*/}
                <Route
                  path="/userSessionWithOutContext"
                  element={<NoIncludeContext />}
                />
                {/*with context api user session*/}
                <Route
                  path="/userSessionWithContext"
                  element={<IncludeContext />}
                />

                <Route path="*" element={<h1>404: Not Found</h1>} />
              </Routes>
            </Router>
          </div>
        </LanguageProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
