import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  const values = { userInfo, setUserInfo };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(UserContext);
  if (typeof context === "undefined") throw new Error("useAuth must be used within AuthProvider");
  return context;
};
