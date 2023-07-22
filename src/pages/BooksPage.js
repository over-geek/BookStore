import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Books/Book';
import Form from '../components/Form/Form';
import { removeBookItem } from '../redux/books/booksSlice';
import './BooksPage.css';

const BooksPage = () => {
  const books = useSelector((state) => state.booksSlice.books);
  const dispatch = useDispatch();

  const handleRemoveBook = (id) => {
    dispatch(removeBookItem(id));
  };

  return (
    <div className="books-section">
      <div className="books-container">
        {books.map((book) => (
          <Book key={book.item_id} book={book} onClick={() => handleRemoveBook(book.item_id)} />
        ))}
      </div>
      <div>
        <h4>ADD NEW BOOK</h4>
        <Form />
      </div>
    </div>
  );
};

export default BooksPage;
