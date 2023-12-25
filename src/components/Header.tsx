import { Badge } from '@material-ui/core';
import {
  ShoppingCartOutlined,
  Search,
  PersonOutline,
} from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/Store';
import { toggleUserModal } from '../redux/toggle/toggleSlice';
import Navbar from './Navbar';
import { logo } from '../assets';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userModal } = useSelector((state: RootState) => state.toggle);
  useEffect(() => {}, [userModal]);

  return (
    <div className="w-full ">
      <div className="flex items-center px-32 justify-between py-2">
        <a
          href="/"
          className="flex items-center"
        >
          <img
            src={logo}
            alt="logo"
            className="w-28 h-28 object-contain"
          />
        </a>
        <div className="flex items-center ml-[25px] p-[5px] border-solid border-[1px] border-gray-200 gap-2">
          <input placeholder="Search" />
          <Search style={{ color: 'gray', fontSize: 16 }} />
        </div>

        <div className="flex items-center justify-end gap-12">
          <div className="relative">
            <PersonOutline
              className="cursor-pointer"
              onClick={() => dispatch(toggleUserModal(!userModal))}
            />
            {userModal && (
              <div
                className="z-10 min-w-[200px] border-solid border-[1px] border-black absolute bg-white right-[-50px] shadow-xl border-0 border-t-2 border-red"
                onClick={(event: any) => event.stopPropagation()}
              >
                <div className="flex flex-col p-4 gap-2 justify-center items-center">
                  <p>A returning customer?</p>
                  <button
                    className="text-white p-1 bg-red w-fit"
                    onClick={() => {
                      if (userModal) {
                        dispatch(toggleUserModal(!userModal));
                      }
                      navigate('/Login');
                    }}
                  >
                    Sign in
                  </button>
                  <p>Don't have an account?</p>
                  <a
                    href="/Register"
                    className="text-blue"
                  >
                    Register
                  </a>
                </div>
              </div>
            )}
          </div>
          <Badge
            badgeContent={0}
            color="secondary"
            showZero
          >
            <ShoppingCartOutlined />
          </Badge>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
