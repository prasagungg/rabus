import { createBrowserRouter } from "react-router-dom";
import { AppLayout, AuthLayout } from "./layouts";

import Home from "./module/Home";
import Login from "./module/auth/Login";

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
            index: true,
            element: <Login />,
          },
        ],
      },
    ],
  },
]);

export default router;
