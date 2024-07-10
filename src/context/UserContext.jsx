"use client";

import React from "react";
import { useContext, useState } from "react";

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("probando");
  const [userAuth, setUserAuth] = useState(null);

  return (
    <UserContext.Provider value={{ userAuth, setUserAuth, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);