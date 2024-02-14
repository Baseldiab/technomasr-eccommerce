/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();
export const ContextProvider = ({ children }) => {
  const userNameInitial = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : [];
  };
  const adminInitial = () => {
    const admin = localStorage.getItem("admin");
    return admin ? JSON.parse(admin) : false;
  };

  const [isAdmin, setAdmin] = useState(adminInitial());
  const [user, setUser] = useState(userNameInitial());

  const checkAdmin = (name) => {
    if (name === "johnd") {
      setAdmin(true);
      localStorage.setItem("admin", JSON.stringify(true));
    } else {
      setAdmin(false);
      localStorage.setItem("admin", JSON.stringify(false));
    }
  };
  const login = (user) => {
    // console.log(adminInitial());
    setUser(user);
    localStorage.setItem("user", user);
  };

  const logout = () => {
    setUser([]);
    setAdmin(false);
    localStorage.removeItem("user");
    localStorage.removeItem("admin");
    // console.log(user);
  };

  return (
    <AuthContext.Provider value={{ login, logout, checkAdmin, user, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
