"use client";
import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HackOnModal({ state, setState }) {
  const router = useRouter();

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
          <Image
            src="/HackOn.png"
            width={100}
            height={100}
            alt="HackOn"
            className="w-full md:w-96"
          />
          <button
            onClick={() => {
              setState(false);
              router.push("/hackon");
            }}
            className="p-2 border bg-blue font-semibold"
          >
            Grab the Deal Before It’s Gone!
          </button>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
