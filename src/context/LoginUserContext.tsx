import { useState, createContext } from "react";

export const AuthContext = createContext({
  auth: false,
  handleAuth: () => {},
});

export const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState(false);

  const handleAuth = () => {
    setAuth(!auth);
  };

  const authValues = {
    auth,
    handleAuth,
  };

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};
