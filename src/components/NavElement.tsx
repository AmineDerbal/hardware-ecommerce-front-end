import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowDropDown } from '@material-ui/icons';
import NavSubElement from './NavSubElement';
type NavElementProps = {
  name: string;
  subCategories: string[];
};

const NavElement = ({ name, subCategories }: NavElementProps) => {
  const navigate = useNavigate();
  const [showSubCategories, setShowSubCategories] = useState(false);
  return (
    <div
      className="relative py-4 cursor-pointer"
      onMouseEnter={() => setShowSubCategories(true)}
      onMouseLeave={() => setShowSubCategories(false)}
      onClick={() => navigate(`/category/${name}`)}
    >
      <div className="flex gap-1 ">
        <p>{name}</p>
        <ArrowDropDown />
      </div>

      {showSubCategories && (
        <div className="absolute mt-4 min-w-[150px] border-solid border-[1px] border-gray-200 bg-white shadow-xl text-black z-10">
          {subCategories.map((subCategory) => (
            <NavSubElement
              key={subCategory}
              element={subCategory}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NavElement;
