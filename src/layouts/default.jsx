import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="flex flex-col min-h-screen p-8 bg-gray-50 items-center justify-center">
      <Outlet />
    </main>
  );
};

export default Layout;