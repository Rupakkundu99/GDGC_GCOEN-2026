"use client";
import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Authentication from "../Auth/Authentication";

export default function AuthenticationModal({ state, setState }) {
  return (
    <React.Fragment>
      <Modal open={state} onClose={() => setState(false)}>
        <ModalDialog
          aria-labelledby="nested-modal-title"
          aria-describedby="nested-modal-description"
          sx={(theme) => ({
            [theme.breakpoints.only("xs")]: {
              top: "unset",
              bottom: 0,
              left: 0,
              right: 0,
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              transform: "none",
              maxWidth: "unset",
              border: "2px solid black",
            },
          })}
        >
          <Authentication />
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
