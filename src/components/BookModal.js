import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function BookModal(props) {
  const { book, showModal, onClose } = props;

  return (
    <Modal show={showModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{book.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center mb-3">
          <img src={book.image} alt={book.title} className="img-fluid" style={{ maxWidth: '300px', maxHeight: '400px' }} />
        </div>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Genre:</strong> {book.genre}</p>
        <p><strong>Published:</strong> {book.published}</p>
        <p><strong>Description:</strong> {book.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BookModal;
