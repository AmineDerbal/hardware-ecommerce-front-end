import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Login, Register } from './pages';
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
      </Routes>
    </Router>
  );
};

export default App;
