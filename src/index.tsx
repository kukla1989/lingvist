import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./index.scss";
import DictionaryPage from "./components/DictionaryPage/DictionaryPage.tsx";
import { App } from "./App";
import LearnWordsPage from "./components/LearnWordsPage/LearnWordsPage";
import WordsListPage from "./components/WordsListPage/WordsListPage";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import SignupPage from "./components/SignupPage/SignupPage";
import LoginPage from "./components/LoginPage/LoginPage";
import AppWelcome from "./components/AppWelcome/AppWelcome";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import PublicRoute from "./components/PublicRoute.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import BlogPage from "./components/BlogPage/BlogPage.tsx";
import ArticlePage from "./components/ArticlePage/ArticlePage.tsx";

const root = createRoot(document.getElementById("root")!);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <App />
              </ProtectedRoute>
            }
          >
            <Route index element={<LearnWordsPage />} />
            <Route path="/home" element={<LearnWordsPage />} />
            <Route path="/dictionary" element={<DictionaryPage />} />
            <Route path="/words-list" element={<WordsListPage />} />
          </Route>

          <Route
            path="welcome"
            element={
              <PublicRoute>
                <AppWelcome />
              </PublicRoute>
            }
          > <Route index element={<WelcomePage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="article/:id" element={<ArticlePage />} />
          </Route>
        </Routes>
      </HashRouter>
    </React.StrictMode>
  </Provider>,
);
