"use client";
import { useModal } from "@/context/ModalContext";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import { PlusIcon, SaveIcon, ShareIcon, User } from "lucide-react";
import React from "react";
import TestForm from "@/components/DialogModals/Forms/TestForm";
import UserRegistration from "@/components/Forms/UserRegistration";

const SpeedDialBtn: React.FC = () => {
  const { openModal } = useModal();
  return (
    <div>
      <SpeedDial
        ariaLabel="SpeedDial"
        icon={<PlusIcon />}
        sx={{ position: "fixed", bottom: 80, right: 16 }}
      >
        <SpeedDialAction
          onClick={() =>
            openModal("New UGV Registration", <TestForm />, "modal-4xl")
          }
          icon={<PlusIcon />}
          tooltipTitle="Add UGV"
          className=" text-green-500 dark:bg-gray-600"
        />
        <SpeedDialAction
          onClick={() =>
            openModal("User Registration", <UserRegistration />, "modal-4xl")
          }
          className=" text-green-500 dark:bg-gray-600"
          icon={<User />}
          tooltipTitle="User Registration"
        />
        <SpeedDialAction
          className=" text-green-500 dark:bg-gray-600"
          icon={<SaveIcon />}
          tooltipTitle="Save"
        />
        <SpeedDialAction
          className=" text-green-500 dark:bg-gray-600"
          icon={<ShareIcon />}
          tooltipTitle="Share"
        />
      </SpeedDial>
    </div>
  );
};

export default SpeedDialBtn;
