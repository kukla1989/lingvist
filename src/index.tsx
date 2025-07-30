import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";

import "./index.scss";
import AddWordsPage from "./components/AddWordsPage/addWordsPage";
import { App } from "./App";
import LearnWordsPage from "./components/LearnWordsPage/LearnWordsPage";
import WordsListPage from "./components/WordsListPage/WordsListPage";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import SignupPage from "./components/SignupPage/SignupPage";
import LoginPage from "./components/LoginPage/LoginPage";
import AppWelcome from "./components/AppWelcome/AppWelcome";

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

        <Route path="welcome" element={<AppWelcome />}>
          <Route index element={<WelcomePage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
