import React from "react";
import Sidebar from "../views/Sidebar/Sidebar";
import DesktopNavbar from "./Navbar/DesktopNavbar/DesktopNavbar";
import MobileNavbar from "./Navbar/MobileNavbar/MobileNavbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative ">
      <div className="h-screen  flex md:overflow-hidden ">
        <aside className=" lg:w-max  xl:w-[27.5rem] h-full  shadow-sm hidden md:block">
          <Sidebar />
        </aside>
        <main className="flex-1 h-full sb md:flex flex-col shadow-sm ">
          <div className="hidden md:block">
            <DesktopNavbar />
          </div>
          <MobileNavbar />
          <div className="flex-1 children-box mt-16 container sb">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
