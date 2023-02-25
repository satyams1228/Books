import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import BookCard from './components/BookCard.js';
import BookModal from './components/BookModal.js';
import data from './books.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
function App() {
  const [books, setBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState(true); // default to list view
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    setBooks(data);
  }, []);

  const handleCardClick = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setSelectedBook({});
    setShowModal(false);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleViewModeChange = () => {
    setViewMode(prevViewMode => !prevViewMode);
  };

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const filteredBooks = books.filter(book => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      book.title.toLowerCase().includes(searchTermLower) ||
      book.author.toLowerCase().includes(searchTermLower) ||
      book.genre.toLowerCase().includes(searchTermLower)
    );
  });


  return (
    <div className={`App ${theme === 'light' ? 'bg-light' : 'bg-dark'}`}>
      <Container>
        <Row className="my-4">
          <Col md={3}>
            <Form.Control type="text" placeholder="Search" value={searchTerm} onChange={handleSearchChange} />
          </Col>
          <Col md={6}>
            <Form.Check type="switch" id="view-mode-switch" label={`View mode: ${viewMode}`} checked={viewMode === 'list'} value={viewMode} onChange={handleViewModeChange} />
          </Col>
          <Col md={3}>
            <Form.Check type="switch" id="theme-switch" label={`${theme} mode`} checked={theme === 'dark'} onChange={handleThemeChange} />
          </Col>
        </Row>
        <Row>
          {filteredBooks.map(book => (
            <Col key={book.id} xs={12} md={viewMode ? 12 : 4}>
              <BookCard book={book} onCardClick={handleCardClick} />
            </Col>
          ))}
        </Row>
        <BookModal book={selectedBook} showModal={showModal} onClose={handleModalClose} />
      </Container>
    </div>
  );
}

export default App;
