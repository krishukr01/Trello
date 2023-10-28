import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const Layout = () => {
  return (
    <main className="h-screen border-black bg-slate-200">
      <Navbar />
      <Outlet />
    </main>
  );
};
