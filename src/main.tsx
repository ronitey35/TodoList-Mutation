import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Todo from "./components/Todo.tsx";

const query = new QueryClient({});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={query}>
        <Routes>
          <Route index element={<App />} />
          <Route path="/todos" element={<App />} />
          <Route path="/todo/:id" element={<Todo />} />
        </Routes>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>
);
