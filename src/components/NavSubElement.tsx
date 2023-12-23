type NavSubElementProps = {
  element: string;
};

const NavSubElement = ({ element }: NavSubElementProps) => {
  return <div className="p-2 cursor-pointer">{element}</div>;
};

export default NavSubElement;
