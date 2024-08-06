// src/components/ui/BasicModal.tsx

"use client";
import React, { Suspense, lazy } from "react";
import { Modal, Grow } from "@mui/material";
import { CgClose } from "react-icons/cg";
import { useModal } from "@/context/ModalContext";
import MuiThemeProvider from "@/components/Theme/MuiThemeProvider";

// Define the size classes for the modal
const sizeClasses = {
  "modal-sm": "max-w-sm",
  "modal-md": "max-w-md",
  "modal-lg": "max-w-lg",
  "modal-xl": "max-w-xl",
  "modal-2xl": "max-w-2xl",
  "modal-3xl": "max-w-3xl",
  "modal-4xl": "max-w-4xl",
  "modal-5xl": "max-w-5xl",
};

export default function BasicModal() {
  const { isModalOpen, closeModal, modalContent, modalTitle, modalSize } =
    useModal();

  // Determine the size class based on modalSize
  const sizeClass = sizeClasses[modalSize] || "max-w-5xl";

  return (
    <MuiThemeProvider>
      <Modal
        open={isModalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex justify-center items-center overflow-auto p-4 backdrop-blur-sm"
      >
        <Grow in={isModalOpen}>
          {/* Modal Container */}
          <div
            className={`container bg-gray-100 dark:bg-gray-800 rounded-lg p-6 max-h-[calc(100vh-4rem)] overflow-y-auto ${sizeClass}`}
          >
            {/* Modal Header */}
            <div className="container flex justify-between mb-4">
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                {modalTitle}
              </h1>
              <CgClose
                className="cursor-pointer hover:text-red-500 text-xl"
                onClick={closeModal}
              />
            </div>
            {/* Modal Content */}
            <Suspense fallback={<div>Loading...</div>}>{modalContent}</Suspense>
          </div>
        </Grow>
      </Modal>
    </MuiThemeProvider>
  );
}
