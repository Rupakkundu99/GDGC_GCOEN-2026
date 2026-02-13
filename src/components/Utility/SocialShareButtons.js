"use client";
import React from "react";
import {
  TwitterShareButton,
  LinkedinShareButton,
  InstapaperShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";

const SocialShareButtons = ({ url, title }) => {
  return (
    <div  className="flex flex-col gap-5">
      <h4 style={styles.heading}>Share this post:</h4>
      <div className="flex  gap-5" >
        <TwitterShareButton url={url} title={title} style={styles.button}>
          <FaTwitter style={styles.icon} />
        </TwitterShareButton>

        <LinkedinShareButton url={url} title={title} style={styles.button}>
          <FaLinkedin style={styles.icon} />
        </LinkedinShareButton>
        <TelegramShareButton url={url} title={title} style={styles.button}>
          <FaTelegram style={styles.icon} />
        </TelegramShareButton>
        <WhatsappShareButton url={url} title={title} style={styles.button}>
          <FaWhatsapp style={styles.icon} />
        </WhatsappShareButton>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    margin: "20px 0",
  },
  heading: {
    fontSize: "16px",
    color: "#333",
  },
  button: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4f4f4",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
  },
  icon: {
    fontSize: "20px",
    color: "#333",
  },
};

export default SocialShareButtons;
