import { useEffect, useContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import WithUIContext from "./context/ui";
import WithUserContext from "./context/user";
import { UIContext } from "./context/ui";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";

import "./styles/globals.scss";

function App() {
  const { setMenuIsOpen } = useContext(UIContext);

  const location = useLocation();
  useEffect(() => {
    setMenuIsOpen(false);
    document.startViewTransition();
  }, [location]);
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
