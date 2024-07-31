import { createBrowserRouter } from "react-router-dom";
import { AppLayout, AuthLayout } from "./layouts";

import Home from "./pages/Home";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <AppLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
        ],
      },
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
        ],
      },
    ],
  },
]);

export default router;
