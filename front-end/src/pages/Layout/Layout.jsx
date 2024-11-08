import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Layout.css";

export default function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
