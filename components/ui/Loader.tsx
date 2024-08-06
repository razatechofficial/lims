// components/GradientLoader.tsx
import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-12rem)] z-50">
      <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>{" "}
    </div>
  );
};

export default Loader;
