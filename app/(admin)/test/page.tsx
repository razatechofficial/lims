"use client";
import React from "react";
import { useModal } from "@/context/ModalContext";
import { Button } from "@mui/material";
// import BasicModal from "@/components/ui/BasicModal";
import TestForm from "@/components/DialogModals/Forms/TestForm";

const TestComponent: React.FC = () => {
  const { openModal } = useModal();

  return (
    <div>
      {/* <BasicModal /> */}
      <Button
        onClick={() =>
          openModal("Registration Modal", <TestForm />, "modal-lg")
        }
      >
        Open Registration Modal (Large)
      </Button>
      <Button
        onClick={() =>
          openModal("Small Modal", <div>Small Content</div>, "modal-3xl")
        }
      >
        Open Small Modal
      </Button>
      <Button
        onClick={() =>
          openModal("Extra Large Modal", <div>XL Content</div>, "modal-5xl")
        }
      >
        Open Extra Large Modal
      </Button>
    </div>
  );
};

const TestModalPage: React.FC = () => {
  return <TestComponent />;
};

export default TestModalPage;
