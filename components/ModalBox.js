import React from "react";
import styles from "../styles/ModalBox.module.css";
import ModalImage from "./ModalImage";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

export default function ModalBox({ show, clickClose, modalImage }) {
  //closes the modal view
  const handleCloseClick = (e) => {
    e.preventDefault();
    clickClose();
  };

  return (
    <Modal
      className={styles.modalOverlay}
      open={show}
      onClose={handleCloseClick}
    >
      <Box
        className={
          modalImage.width >= modalImage.height //set conditions for width of modal view depending on image's dimensions (portrait vs landscape)
            ? styles.modalLandscape
            : styles.modalPortrait
        }
      >
        <div className={styles.modalHeader}>
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        </div>
        <ModalImage modalImage={modalImage} />
      </Box>
    </Modal>
  );
}
