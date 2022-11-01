import React from "react";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";

export default function ModalConfirmation({ showModal, setShow, isReserved }) {
  return (
    <Modal show={showModal} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmation de réservation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isReserved && (
          <Alert variant="success">La reservation a été effectué !</Alert>
        )}
      </Modal.Body>
    </Modal>
  );
}
