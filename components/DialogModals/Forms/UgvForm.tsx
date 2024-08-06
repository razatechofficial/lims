// components/ModalForm.tsx

import React from "react";

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalForm: React.FC<ModalFormProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isOpen ? "block" : ""
      }`}
    >
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg z-10 max-w-5xl w-full mx-4 relative">
        <button
          className="absolute top-2 right-2 text-red-500 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Row 1 */}
      
    
          <div className="relative mt-2 w-full">
            <input
              type="text"
              id="field1"
              placeholder="Enter your name"
              className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 dark:text-white focus:border-blue-600 focus:outline-none focus:ring-0"
            />
            <label
              htmlFor="field1"
              className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white dark:bg-gray-800 px-2 text-sm text-gray-500 dark:text-gray-400 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
            >
              Name
            </label>
          </div>
          <div className="relative mt-2 w-full">
            <input
              type="text"
              id="field2"
              placeholder=" "
              className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 dark:text-white focus:border-blue-600 focus:outline-none focus:ring-0"
            />
            <label
              htmlFor="field2"
              className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white dark:bg-gray-800 px-2 text-sm text-gray-500 dark:text-gray-400 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
            >
              Field 2
            </label>
          </div>
          <div className="relative mt-2 w-full">
            <input
              type="text"
              id="field3"
              placeholder=" "
              className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 dark:text-white focus:border-blue-600 focus:outline-none focus:ring-0"
            />
            <label
              htmlFor="field3"
              className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white dark:bg-gray-800 px-2 text-sm text-gray-500 dark:text-gray-400 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
            >
              Field 3
            </label>
          </div>
          {/* Row 2 */}
          <div className="relative mt-2 w-full">
            <input
              type="text"
              id="field4"
              placeholder=" "
              className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 dark:text-white focus:border-blue-600 focus:outline-none focus:ring-0"
            />
            <label
              htmlFor="field4"
              className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white dark:bg-gray-800 px-2 text-sm text-gray-500 dark:text-gray-400 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
            >
              Field 4
            </label>
          </div>
          <div className="relative mt-2 w-full">
            <input
              type="text"
              id="field5"
              placeholder=" "
              className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 dark:text-white focus:border-blue-600 focus:outline-none focus:ring-0"
            />
            <label
              htmlFor="field5"
              className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white dark:bg-gray-800 px-2 text-sm text-gray-500 dark:text-gray-400 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
            >
              Field 5
            </label>
          </div>
          <div className="relative mt-2 w-full">
            <input
              type="text"
              id="field6"
              placeholder=" "
              className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 dark:text-white focus:border-blue-600 focus:outline-none focus:ring-0"
            />
            <label
              htmlFor="field6"
              className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white dark:bg-gray-800 px-2 text-sm text-gray-500 dark:text-gray-400 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
            >
              Field 6
            </label>
          </div>
          {/* Row 3 */}
          <div className="relative mt-2 w-full">
            <input
              type="text"
              id="field7"
              placeholder=" "
              className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 dark:text-white focus:border-blue-600 focus:outline-none focus:ring-0"
            />
            <label
              htmlFor="field7"
              className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white dark:bg-gray-800 px-2 text-sm text-gray-500 dark:text-gray-400 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
            >
              Field 7
            </label>
          </div>
          <div className="relative mt-2 w-full">
            <input
              type="text"
              id="field8"
              placeholder=" "
              className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 dark:text-white focus:border-blue-600 focus:outline-none focus:ring-0"
            />
            <label
              htmlFor="field8"
              className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white dark:bg-gray-800 px-2 text-sm text-gray-500 dark:text-gray-400 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
            >
              Field 8
            </label>
          </div>
          <div className="relative mt-2 w-full">
            <input
              type="text"
              id="field9"
              placeholder=" "
              className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 dark:text-white focus:border-blue-600 focus:outline-none focus:ring-0"
            />
            <label
              htmlFor="field9"
              className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white dark:bg-gray-800 px-2 text-sm text-gray-500 dark:text-gray-400 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
            >
              Field 9
            </label>
          </div>
          <button
            type="submit"
            className="col-span-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
