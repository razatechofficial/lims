import React from "react";
import { SidebarProvider } from "@/context/SidebarContext";
import { ModalProvider } from "@/context/ModalContext";

interface ContextProvidersProps {
  children: React.ReactNode;
}

const ContextProviders: React.FC<ContextProvidersProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <ModalProvider>{children}</ModalProvider>
    </SidebarProvider>
  );
};

export default ContextProviders;
