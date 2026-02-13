"use client";
import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Authentication from "../Auth/Authentication";
import EventRegistration from "../Events/EventRegistration";
import Image from "next/image";

export default function UserEventRegistrationModal({
  state,
  setState,
  BannerURL,
  EventData
}) {
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
              border: "1px solid black",
            },
          })}
        >
          <Image  className="w-full rounded-md"  src={BannerURL} width={100} height={100} alt="Banner" />
          <EventRegistration EventData={EventData} />
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
