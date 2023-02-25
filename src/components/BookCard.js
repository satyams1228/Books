import React from 'react';
import { Card } from 'react-bootstrap';
import './BookCard.css';

function BookCard({ book, onCardClick }) {
  return (
    <div className="book-card" onClick={() => onCardClick(book)}>
      <Card>
        <Card.Img variant="top" src={book.image} />
        <Card.Body>
            
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.author}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BookCard;
