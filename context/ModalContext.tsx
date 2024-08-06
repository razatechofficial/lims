// src/context/ModalContext.tsx
"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

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

type ModalContextType = {
  isModalOpen: boolean;
  openModal: (
    title: string,
    content: ReactNode,
    size: keyof typeof sizeClasses
  ) => void;
  closeModal: () => void;
  modalTitle: string;
  modalContent: ReactNode;
  modalSize: keyof typeof sizeClasses;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState<ReactNode>(null);
  const [modalSize, setModalSize] =
    useState<keyof typeof sizeClasses>("modal-md");

  const openModal = (
    title: string,
    content: ReactNode,
    size: keyof typeof sizeClasses
  ) => {
    setModalTitle(title);
    setModalContent(content);
    setModalSize(size);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        modalTitle,
        modalContent,
        modalSize,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
