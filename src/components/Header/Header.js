import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import './Header.css';

const Header = () => (
  <header>
    <div className="navContainer">
      <Link to="/">
        <h1>BookStore Cms</h1>
      </Link>
      <nav>
        <Link to="/">Books</Link>
        <Link to="/categories">Categories</Link>
      </nav>
    </div>
    <div className="user-icon-container">
      <FaUser style={{ color: '#0290ff' }} />
    </div>
  </header>
);

export default Header;
