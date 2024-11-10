import { createContext, useState } from "react";

export const UserContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export default function WithUserContext({ children }) {
  const hasStoredSession = JSON.parse(localStorage.getItem("isLoggedIn"));

  const [isLoggedIn, setIsLoggedIn] = useState(hasStoredSession ? true : false);
  const user = { username: "uncinc", password: "letmein" };
  return (
    <UserContext.Provider
      value={{
        user,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
