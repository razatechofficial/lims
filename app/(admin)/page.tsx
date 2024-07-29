import React from "react";

const page = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold">Home</h1>
      {/* dashboard content here */}
      <div className="mt-4">
        <p>Welcome admin!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <div className="p-4 border border-slate-800 dark:bg-slate-900 dark:text-gray-100 dark:border-slate-500 shadow rounded">
            Total UGV's
            <br />
            <span>3213</span>
          </div>
          <div className="p-4 border border-slate-800 dark:bg-slate-900 dark:text-gray-100 dark:border-slate-500 shadow rounded">
            Active UGV's
            <br />
            <span>3213</span>
          </div>
          <div className="p-4 border border-slate-800 dark:bg-slate-900 dark:text-gray-100 dark:border-slate-500 shadow rounded">
            Passive UGV's
            <br />
            <span>3213</span>
          </div>
        </div>

        <hr className="mt-5 dark:border-slate-500" />
      </div>
    </>
  );
};

export default page;
