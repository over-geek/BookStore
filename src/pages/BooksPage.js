import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Books/Book';
import Form from '../components/Form/Form';
import { fetchBooks, removeBookItem } from '../redux/books/booksSlice';
import './BooksPage.css';

const BooksPage = () => {
  const books = useSelector((state) => state.booksSlice.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleRemoveBook = (id) => {
    dispatch(removeBookItem(id));
  };

  const btnStyle = {
    fontSize: '0.75rem',
    color: 'rgba(255, 255, 255, 0.6)',
    backgroundColor: '#0290ff',
    padding: '0.43rem 1.2rem',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '3px',
  };

  const formBtnStyle = { ...btnStyle, color: '#fff' };

  return (
    <section className="books-section">
      <div className="books-container">
        {books.map((book) => (
          <Book
            key={book.item_id}
            book={book}
            btnStyle={btnStyle}
            onClick={() => handleRemoveBook(book.item_id)}
          />
        ))}
      </div>
      <hr />
      <div className="form-container">
        <h4>ADD NEW BOOK</h4>
        <Form btnStyle={formBtnStyle} />
      </div>
    </section>
  );
};

export default BooksPage;
