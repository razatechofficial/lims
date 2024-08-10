// components/GradientLoader.tsx
import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-12rem)] z-10">
      <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>{" "}
    </div>
  );
};

export default Loader;

export const ChartLoader: React.FC = () => {
  return (
    <div className="flex place-content-center items-center justify-center h-[calc(100vh-30rem)] z-10">
      <div className="inline-flex h-5 w-5 animate-spin rounded-full border-2 border-green-500 !border-l-transparent dark:border-sky-500"></div>
    </div>
  );
};
