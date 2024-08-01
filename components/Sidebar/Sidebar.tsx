"use client";
import {
  Home,
  MoreVertical,
  Menu,
  ChevronLeft,
  MapPinned,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/context/SidebarContext";
import Image from "next/image";
import { useTheme } from "next-themes";

const Sidebar: React.FC<any> = ({ children }) => {
  const { isSidebarOpen, toggleSidebar } = useSidebar(); // Use context values
  const pathname = usePathname(); // Get the current pathname
  const { theme } = useTheme(); // Access the current theme
  const navItems = [
    { path: "/", label: "Home", icon: <Home size={20} />, isAlert: true },
    {
      path: "/users",
      label: "Users",
      icon: <UsersRound size={20} />,
      isAlert: true,
    },
    {
      path: "/map",
      label: "UGVMap",
      icon: <MapPinned size={20} />,
      isAlert: false,
    },
    {
      path: "/weather",
      label: "Weather",
      icon: <MapPinned size={20} />,
      isAlert: true,
    },
  ];

  return (
    <>
      <aside
        className={`h-screen fixed z-40 lg:relative transition-all duration-300 ${
          isSidebarOpen ? "w-64" : "w-16"
        } lg:w-auto`}
      >
        <nav className="h-full flex flex-col bg-white dark:bg-slate-900 dark:text-gray-100 duration-100 border-r dark:border-slate-500 shadow-sm">
          {/* Sidebar Logo with Toggle btn */}
          <div className="p-4 pb-2 flex justify-between items-center">
            {/* Sidebar Logo */}
            <Image
              alt="LIMS Logo"
              height={isSidebarOpen ? 50 : 40}
              width={isSidebarOpen ? 50 : 40}
              src={
                theme === "light"
                  ? "/assets/images/lims1.png"
                  : "/assets/images/lims.png"
              }
              className={`overflow-hidden transition-all`}
            />
            {isSidebarOpen && (
              <span className="ml-1 text-xl font-bold">LIMS Pakistan</span>
            )}

            {/* Sidebar Toggle btn */}
            {isSidebarOpen && (
              <button
                className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-slate-800 dark:text-gray-100 duration-100 dark:hover:text-sky-600"
                onClick={toggleSidebar}
              >
                <ChevronLeft absoluteStrokeWidth strokeWidth={1.5} />
              </button>
            )}
          </div>
          <ul className={`flex-1 px-3 ${isSidebarOpen ? "mt-4" : ""}`}>
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group dark:text-gray-100 ${
                    pathname === item.path
                      ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 dark:text-indigo-800"
                      : "hover:bg-indigo-50 text-gray-600 dark:hover:bg-indigo-100 dark:hover:text-indigo-700"
                  }`}
                >
                  {item.icon}

                  <span
                    className={`overflow-hidden transition-all ${
                      isSidebarOpen ? "w-52 ml-3" : "w-0"
                    }`}
                  >
                    {item.label}
                  </span>

                  {/* Sidebar Item Alert dot */}
                  {item.isAlert && (
                    <div
                      className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
                        isSidebarOpen ? "" : "top-2"
                      }`}
                    ></div>
                  )}
                  {/* If sidebar is closed then show the item name on hover */}
                  {!isSidebarOpen && (
                    <div
                      className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
                    >
                      {item.label}
                    </div>
                  )}
                </Link>
              </li>
            ))}
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
              className={`
            flex justify-between items-center
            overflow-hidden transition-all ${
              isSidebarOpen ? "w-52 ml-3" : "w-0"
            }
        `}
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
    </>
  );
};

export default Sidebar;
