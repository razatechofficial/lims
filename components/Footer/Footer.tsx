"use client";
import React from "react";
import { useSidebar } from "@/context/SidebarContext";

const Footer = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  return (
    <footer
      className={`flex z-20 justify-center items-center fixed bottom-0 left-16 right-0 p-3 bg-white border-t border-gray-200 shadow  md:p-[1.37rem] dark:bg-gray-900 dark:border-gray-600 ${
        isSidebarOpen ? "md:left-64" : ""
      }`}
    >
      <span className="text-sm text-center text-gray-500 sm:text-center dark:text-gray-400">
        © 2024{" "}
        <a href="" className="hover:underline">
          LIMS Pakkistan™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
