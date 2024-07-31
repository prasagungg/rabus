import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="max-w-md mx-auto w-full h-full min-h-screen grid place-content-center">
      <Outlet />
    </div>
  );
};
