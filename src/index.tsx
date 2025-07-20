import React from "react";
import { createRoot } from "react-dom/client";

import "./index.scss";
import { HashRouter, Route, Routes } from "react-router-dom";
import AddWordsPage from "./components/AddWordsPage/addWordsPage";
import { App } from "./App";
import LearnWordsPage from "./components/LearnWordsPage/LearnWordsPage";
import WordsListPage from "./components/WordsListPage/WordsListPage";
import WelcomePage from "./components/WelcomePage/WelcomePage";

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<LearnWordsPage />} />
          <Route path="/home" element={<LearnWordsPage />} />
          <Route path="/add-words" element={<AddWordsPage />} />
          <Route path="/words-list" element={<WordsListPage />} />
        </Route>

        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
