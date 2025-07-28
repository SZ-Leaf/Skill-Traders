import { Outlet } from "react-router";

const Layout = () => {
  return (
    <main className="w-full bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50]">
      <Outlet />
    </main>
  );
};

export default Layout;