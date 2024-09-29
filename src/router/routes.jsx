import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { TaskDetails } from "../pages/taskDetails";
export function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/task/:id",
      element: <TaskDetails />,
    },
  ]);

  return router;
}
