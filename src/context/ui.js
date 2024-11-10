import { createContext, useState } from "react";

export const UIContext = createContext({
  menuIsOpen: false,
  setMenuIsOpen: () => {},
});

export default function WithUIContext({ children }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <UIContext.Provider
      value={{
        menuIsOpen,
        setMenuIsOpen,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}
