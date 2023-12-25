import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@material-ui/core';
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
      dispatch(toggleUserModal(false));
    }
  };
  useEffect(() => {}, [userModal]);
  return (
    <div onClick={handleClick}>
      <Router>
        <Header />
        <Box className="min-h-screen">
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
        </Box>
      </Router>
    </div>
  );
};

export default App;
