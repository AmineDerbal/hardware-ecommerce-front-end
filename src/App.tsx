import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Login, Register } from './pages';
import { Category } from './pages/Products';
import { Header } from './components';

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/product-category/:category"
          element={<Category />}
        />
      </Routes>
    </Router>
  );
};

export default App;
