"use client";
import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Authentication from "../Auth/Authentication";
import EventRegistration from "../Events/EventRegistration";
import Image from "next/image";
import { Rating } from "@mui/material";
import RatingUs from "../Utility/RatingUs";

export default function RatingModal({ state, setState }) {
  const [value, setValue] = React.useState("");
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
              transform: "none",
              maxWidth: "unset",
            },
          })}
        >
          <RatingUs />
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
