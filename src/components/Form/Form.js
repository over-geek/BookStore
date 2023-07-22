import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { PropTypes } from 'prop-types';
import { addBookItem } from '../../redux/books/booksSlice';
import Button from '../Button/Button';
import './Form.css';

function Form({ btnStyle }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addBookItem(
        {
          item_id: uuidv4(),
          title,
          author,
          category: 'Fiction',
        },
      ));
    }
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book title" className="title-input" />
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" className="author-input" />
        <Button
          defaultProps
          btnStyle={btnStyle}
          name="ADD BOOK"
        />
      </form>
    </div>
  );
}

Form.propTypes = {
  btnStyle: PropTypes.shape({
    color: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
  }).isRequired,
};

export default Form;
