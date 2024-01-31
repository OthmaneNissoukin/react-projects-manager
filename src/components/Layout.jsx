import { Outlet } from "react-router";
import Header from "../ui/Header";
import Sidebar from "../ui/Sidebar";

function Layout() {
  return (
    <>
      <Header />

      <section className="flex">
        <Sidebar />
        <main className="px-5 py-2.5 grow overflow-x-hidden">
          <Outlet />
        </main>
      </section>
    </>
  );
}

export default Layout;
