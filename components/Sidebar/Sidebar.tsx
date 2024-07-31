"use client";
import { Home, MoreVertical, Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation"; // Use usePathname instead of useRouter

const Sidebar: React.FC<any> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md"
      >
        <Menu size={24} />
      </button>

      <aside
        className={`h-screen fixed z-40 lg:relative transition-all duration-300 ${
          isSidebarOpen ? "left-0" : "-left-64"
        } lg:left-0 w-64 lg:w-auto`}
      >
        <nav className="h-full flex flex-col dark:bg-slate-900 dark:text-gray-100 duration-100 border-r dark:border-slate-500 shadow-sm">
          <h1 className="m-4 text-sm lg:text-xl font-bold">LIMS</h1>

          <ul className="flex-1 px-3 mt-10">
            <li>
              <Link
                href="/"
                className={`flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
                  pathname === "/"
                    ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 dark:text-gray-700"
                    : "text-gray-600 dark:text-gray-100 hover:bg-indigo-50 dark:hover:bg-indigo-100"
                }`}
              >
                <Home size={20} />
                <span className={`ml-3 block`}>Home</span>
              </Link>
            </li>

            <li>
              <Link
                href="/users"
                className={`flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
                  pathname === "/users"
                    ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 dark:text-gray-700"
                    : "text-gray-600 dark:text-gray-100 hover:bg-indigo-50 dark:hover:bg-indigo-100"
                }`}
              >
                <Home size={20} />
                <span className={`ml-3 block`}>Users</span>
              </Link>
            </li>

            <li>
              <Link
                href="/map"
                className={`flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
                  pathname === "/map"
                    ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 dark:text-gray-700"
                    : "text-gray-600 dark:text-gray-100 hover:bg-indigo-50 dark:hover:bg-indigo-100"
                }`}
              >
                <Home size={20} />
                <span className={`ml-3 block`}>UGV Map</span>
              </Link>
            </li>
            {children}
          </ul>

          {/* Sidebar footer with profile icon and loggedin user details */}
          <div className="border-t dark:border-slate-500 flex p-3">
            {/* Sidebar footer profile img */}
            <img
              src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
              alt=""
              className="w-10 h-10 rounded-md"
            />

            {/* Sidebar footer user details */}
            <div
              className={`flex justify-between items-center overflow-hidden transition-all w-52 ml-3`}
            >
              <div className="leading-4">
                <h4 className="font-semibold">Lims Admin</h4>
                <span className="text-xs text-gray-600 dark:text-gray-300">
                  admin@lims.org
                </span>
              </div>
              {/* More options icon */}
              <MoreVertical size={20} />
            </div>
          </div>
        </nav>
      </aside>

      {/* Overlay for Mobile Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
