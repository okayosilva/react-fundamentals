import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from "./App.jsx";
import { TasksProvider } from "./contexts/tasksContexts.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TasksProvider>
      <App />
    </TasksProvider>
    <ToastContainer />
  </StrictMode>,
);
