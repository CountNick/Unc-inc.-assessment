import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WithUIContext from "./context/ui";
import WithUserContext from "./context/user";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";

import "./styles/globals.scss";

function App() {
  return (
    <WithUserContext>
      <WithUIContext>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </WithUIContext>
    </WithUserContext>
  );
}

export default App;
