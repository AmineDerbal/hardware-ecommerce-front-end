import NavElement from './NavElement';
import { categories } from '../constants';
const Navbar = () => {
  return (
    <div className="w-full px-32 bg-red text-white flex items-center gap-4">
      {categories.map((category) => (
        <NavElement
          key={category.name}
          {...category}
        />
      ))}
    </div>
  );
};

export default Navbar;
