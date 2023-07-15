import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './Book.css';

const Book = ({ book, delBook }) => {
  const { id, title, author } = book;
  return (
    <li className="book">
      <div>
        <div>
          <h3>{title}</h3>
          <p>{author}</p>
        </div>
        <div>
          <button type="button" onClick={() => delBook(id)}>Remove</button>
        </div>
      </div>
      <div className="progress-container">
        <div className="progress">
          <p>64% completed</p>
        </div>
        <div className="chapter-container">
          <div>
            <p>CURRENT CHAPTER</p>
          </div>
          <div>
            <p>Chapter 3: &quot;A lesson Learned&quot;</p>
          </div>
          <div>
            <Button name="UPDATE PROGRESS REPORT" />
          </div>
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  delBook: PropTypes.func.isRequired,
};

export default Book;
