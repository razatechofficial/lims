import React from "react";

const page = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold">Home</h1>
      {/* dashboard content here */}
      <div className="mt-4">
        <p>Welcome admin!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <div className="p-4  border-slate-800 dark:bg-slate-800 dark:text-gray-200 dark:border-slate-500  rounded ring-1 ring-slate-900/5 shadow-xl">
            Total UGV's
            <br />
            <span className="text-5xl font-light md:text-6xl dark:text-white">
              3213
            </span>
            <br />
            <span className="flex items-center space-x-1 text-sm font-medium text-green-500 dark:text-green-400">
              <span>3% increase</span>

              <svg
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17.25 15.25V6.75H8.75"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17 7L6.75 17.25"
                ></path>
              </svg>
            </span>
          </div>

          <div className="p-4 border border-slate-800 dark:bg-slate-900 dark:text-gray-200 dark:border-slate-500 shadow rounded">
            Active UGV's
            <br />
            <span className="text-5xl font-light md:text-6xl dark:text-white">
              3213
            </span>
            <br />
            <span className="flex items-center space-x-1 text-sm font-medium text-red-500 dark:text-red-400">
              <span>3% decrease</span>

              <svg
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17.25 8.75V17.25H8.75"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17 17L6.75 6.75"
                ></path>
              </svg>
            </span>
          </div>

          <div className="p-4 border border-slate-800 dark:bg-slate-900 dark:text-gray-200 dark:border-slate-500 shadow rounded">
            Passive UGV's
            <br />
            <span className="text-5xl font-light md:text-6xl dark:text-white">
              3213
            </span>
            <br />
            <span className="flex items-center space-x-1 text-sm font-medium text-green-500 dark:text-green-400">
              <span>3% increase</span>

              <svg
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17.25 15.25V6.75H8.75"
                ></path>
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17 7L6.75 17.25"
                ></path>
              </svg>
            </span>
          </div>
        </div>

        <hr className="mt-5 dark:border-slate-500" />
      </div>
    </>
  );
};

export default page;
