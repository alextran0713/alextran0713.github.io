import { isEmpty } from "lodash";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface PopupProps {
  title?: string;
  message?: string;
  closeButton?: boolean;
  selectionButton?: boolean;
  isShow: boolean;
  setIsShow: (isShow: boolean) => void;
}

const Popup = ({
  title = "",
  message = "",
  closeButton = false,
  selectionButton = false,
  isShow = false,
  setIsShow,
}: PopupProps) => {
  const handleClose = () => setIsShow && setIsShow(!isShow);
  return (
    <Modal show={isShow} onHide={handleClose}>
      {!isEmpty(title) && (
        <Modal.Header closeButton={closeButton}>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
      )}
      {!isEmpty(message) && (
        <Modal.Body>
          <p>{message}</p>
        </Modal.Body>
      )}
      {selectionButton && (
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default Popup;
