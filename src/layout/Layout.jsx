import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const Layout = () => {
  return (
    <main className="h-screen bg-custom-gradient ">
      <Navbar />
      <Outlet />
    </main>
  );
};
