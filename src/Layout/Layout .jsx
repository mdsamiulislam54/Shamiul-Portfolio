import { Outlet } from "react-router";
import Sidebar from "../Components/Sidebar/Sidebar";
import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { darkModeToggle } from "../Hook/DarkModeToggle/DarkModeToogle";
import { LuSunMoon } from "react-icons/lu";
import { MdDarkMode } from "react-icons/md";
import { IoMdClose } from "react-icons/io";


const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex min-h-screen relative ">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <main className="flex-1 dark:bg-gray-800 dark:text-black lg:ml-64 ">
        {/* Toggle button for mobile */}
        <div className="fixed top-0 py-2 px-4 right-0 max-md:w-full max-md:dark:bg-gray-700 max-md:bg-gray-100 z-50 text-3xl text-gray-800 flex justify-end items-end gap-2">
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden ">
            {
              isOpen ?  <IoMdClose className="dark:text-white text-black"  /> :<HiMenuAlt1 className="dark:text-white text-black" />
            }
            
           
          </button>
          <button
            onClick={darkModeToggle}
            className="rounded-full dark:text-white  text-black   cursor-pointer text-3xl"
          >
          <MdDarkMode />
          </button>
        </div>

        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
