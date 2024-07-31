import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div className="max-w-md mx-auto min-h-screen flex flex-col bg-white border-2 border-black rounded-t-lg relative">
      <Outlet />
    </div>
  );
};
