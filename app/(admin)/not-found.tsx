import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-12rem)]">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl font-bold text-indigo-700 dark:text-indigo-500">
          404
        </h1>
        <p className="text-2xl mt-4">Page Not Found</p>
        <Link
          className="mt-6 text-indigo-600 hover:text-indigo-800 hover:scale-150"
          href={"/"}
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
