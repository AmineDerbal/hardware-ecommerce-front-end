import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RootState } from './redux/Store';
import { toggleUserModal } from './redux/toggle/toggleSlice';
import { Home, Login, Register } from './pages';
import { Category } from './pages/Products';
import { Header } from './components';

export const App = () => {
  const dispatch = useDispatch();
  const { userModal } = useSelector((state: RootState) => state.toggle);
  const handleClick = () => {
    if (userModal) {
      dispatch(toggleUserModal());
    }
  };
  useEffect(() => {}, [userModal]);
  return (
    <div onClick={handleClick}>
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
    </div>
  );
};

export default App;
