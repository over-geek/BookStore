import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './Book.css';
import VerticalDivider from '../Divider/VerticalDivider';

const Book = ({ book, onClick, btnStyle }) => {
  const { title, author, category } = book;
  const borderlessBtnStyle = {
    color: '#4386bf',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  };

  return (
    <li className="book">
      <div>
        <div>
          <p className="category-text">{category}</p>
          <h3 className="book-title">{title}</h3>
          <p className="book-author-name">{author}</p>
        </div>
        <div className="btn-container">
          <Button name="Comments" btnStyle={borderlessBtnStyle} onClick={() => 'clicked'} />
          <VerticalDivider type />
          <Button name="Remove" btnStyle={borderlessBtnStyle} onClick={onClick} />
          <VerticalDivider type />
          <Button name="Edit" btnStyle={borderlessBtnStyle} onClick={() => 'clicked'} />
        </div>
      </div>
      <div className="progress-container">
        <div className="progress-tracking-container">
          <div
            style={{
              borderRadius: '50%',
              border: '5px solid #307bbe',
              borderLeftColor: '#e8e8e8',
              width: '68px',
              height: '68px',
            }}
          />
          <div>
            <p className="percent-complete">64%</p>
            <p className="completed">Completed</p>
          </div>
        </div>
        <VerticalDivider />
        <div className="chapter-container">
          <div>
            <p className="current-chapter-text">CURRENT CHAPTER</p>
          </div>
          <div>
            <p className="chapter-text">Chapter 3: &quot;A lesson Learned&quot;</p>
          </div>
          <div className="progress-btn-container">
            <Button name="UPDATE PROGRESS REPORT" btnStyle={btnStyle} onClick={() => 'clicked'} />
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
    category: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  btnStyle: PropTypes.shape({
    color: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
