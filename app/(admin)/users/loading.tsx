// app/users/loading.tsx
import React from "react";

const Loading = () => (
  <div className="flex items-center justify-center h-[calc(100vh-12rem)]">
    <div className="w-12 h-12 rounded-full animate-spin border-4 border-dashed border-sky-400 border-t-transparent"></div>
  </div>
);

export default Loading;
