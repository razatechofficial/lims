import { Bell, Search, User } from "lucide-react";
import React from "react";
import ThemeSwitch from "../Theme/ThemeSwitcher";
// import ThemeSwitch, { ThemeToggleButton } from "../Theme/ThemeSwitcher";

const NavBar = () => {
  return (
    <nav className="flex sticky top-0 items-center justify-between dark:bg-slate-900 dark:text-gray-100 duration-100 px-4 py-2 shadow-sm border-b dark:border-slate-500 lg:pl-4 pl-20">
      <h1 className="ml-1 text-sm lg:text-xl font-bold">Dashboard</h1>

      {/* Search Bar */}
      <div className="flex-2 mx-4 hidden md:block">
        <div className="relative">
          <Search className="absolute top-1/2 transform -translate-y-1/2 left-2 text-indigo-500" />
          <input
            type="text"
            placeholder="Search..."
            className=" pl-10 pr-4 py-2 border dark:border-slate-500 dark:bg-slate-800 rounded-lg"
          />
        </div>
      </div>
      {/* Icons */}
      <div className="flex items-center space-x-4 ">
        {/* <ThemeToggleButton /> */}
        {/* <ThemeToggleButton /> */}
        <ThemeSwitch />
        <Bell className="cursor-pointer" />
        <User className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default NavBar;
