import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from '../components/Books/Book';
import './BooksPage.css';
import Form from '../components/Form/Form';

function BooksPage() {
  const [books, setBooks] = useState([
    {
      id: uuidv4(),
      title: 'Hunger Games',
      author: 'Suzanne Collins',
    },
  ]);
  const addBook = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    setBooks([...books, newBook]);
  };

  const delBook = (id) => {
    setBooks([
      ...books.filter((book) => book.id !== id),
    ]);
  };

  return (
    <div className="books-section">
      <div className="books-container">
        {books.map((book) => (
          <Book key={book.id} book={book} delBook={delBook} />
        ))}
      </div>
      <div>
        <h4>ADD NEW BOOK</h4>
        <Form addBook={addBook} />
      </div>
    </div>
  );
}

export default BooksPage;
