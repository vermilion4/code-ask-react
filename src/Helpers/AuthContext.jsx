import { createContext, useState } from "react";
import React from "react";

// export const userType={
//   username:"",
//   email :"",
//   password:"",
// }

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
