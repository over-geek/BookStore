import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookItem } from '../../redux/books/booksSlice';

function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBookItem(
      {
        item_id: uuidv4(),
        title,
        author,
      },
    ));
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
