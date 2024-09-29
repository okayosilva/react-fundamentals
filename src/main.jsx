import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { RouterProvider } from "react-router-dom";

import { TasksProvider } from "./contexts/tasksContexts.jsx";
import "./index.css";
import { Routes } from "./router/routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TasksProvider>
      <RouterProvider router={Routes()} />
    </TasksProvider>
    <ToastContainer />
  </StrictMode>,
);
