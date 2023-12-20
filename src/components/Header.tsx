import { Badge } from '@material-ui/core';
import { ShoppingCart, Search } from '@material-ui/icons';
import { Person } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { logo } from '../assets';

const Header = () => {
  return (
    <div className="w-full ">
      <div className="flex items-center justify-around px-6 py-2">
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
        <div className="flex items-center ml-[25px] p-[5px] border-solid border-[1px] border-gray-200">
          <input placeholder="Search" />
          <Search style={{ color: 'gray', fontSize: 16 }} />
        </div>
        <div className="flex items-center gap-6">
          <Link to="/login">
            {' '}
            <Person />{' '}
          </Link>
          <Badge
            badgeContent={4}
            color="primary"
          >
            <ShoppingCart />
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Header;
