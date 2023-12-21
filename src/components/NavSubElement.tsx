type NavSubElementProps = {
  element: string;
};

const NavSubElement = ({ element }: NavSubElementProps) => {
  return <div className="p-2">{element}</div>;
};

export default NavSubElement;
