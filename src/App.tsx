import React from "react";
import UnavailablePage from "./pages/404.page";
import Helper from "./utils/helper";
import MainPage from "./pages/main.page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="*" element={<UnavailablePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
