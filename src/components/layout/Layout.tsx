import React from "react";
import Sidebar from "../views/Sidebar/Sidebar";
import DesktopNavbar from "./Navbar/DesktopNavbar/DesktopNavbar";
import MobileNavbar from "./Navbar/MobileNavbar/MobileNavbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative ">
      <div className=" h-screen  flex md:overflow-hidden">
        <aside className="lg:w-max lg:p-8 2xl:p-0  2xl:w-[27.5rem] h-full  shadow-sm hidden md:block ">
          <Sidebar />
        </aside>
        <main className="flex-1 h-full md:flex flex-col shadow-sm ">
          <div className="hidden md:block">
            <DesktopNavbar />
          </div>
          <MobileNavbar />
          <div className="flex-1 children-box 2xl:mt-16 container ">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
