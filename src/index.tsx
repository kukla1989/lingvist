import React from "react";
import { createRoot } from "react-dom/client";

import "./index.scss";
import { HashRouter, Route, Routes } from "react-router-dom";
import CardPage from "./components/CardPage/CardPage";
import AddWordsPage from "./components/AddWordsPage/addWordsPage";
import { App } from "./App";

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<CardPage />} />
          <Route path="/home" element={<CardPage />} />
          <Route path="/add-words" element={<AddWordsPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
