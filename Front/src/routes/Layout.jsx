import { Outlet } from "react-router";

const Layout = () => {
  return (
    <main className="w-full bg-gradient-to-r from-green-500 via-yellow-400 to-orange-500">
      <Outlet />
    </main>
  );
};

export default Layout;