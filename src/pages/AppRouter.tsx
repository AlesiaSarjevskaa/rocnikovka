import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";

import React from "react";
import Game from "./Game/Game";

export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </HashRouter>
  );
}
