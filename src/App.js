import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import BooksPage from './pages/BooksPage';
import CategoriesPage from './pages/CategoriesPage';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="categories" element={<CategoriesPage />} />
      </Routes>
    </div>
  );
}

export default App;
