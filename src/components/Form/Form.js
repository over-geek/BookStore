import { useState } from 'react';
import PropTypes from 'prop-types';

function Form({ addBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addBook(title, author);
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book title" />
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
        <button type="submit">Add Book</button>
      </form>
    </>
  );
}

export default Form;

Form.propTypes = {
  addBook: PropTypes.func.isRequired,
};
