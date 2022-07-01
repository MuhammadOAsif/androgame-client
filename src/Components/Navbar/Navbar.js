import { MenuOutlined } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="fixed w-full text-white flex justify-between p-4 items-center">
      <div className="text-2xl font-bold text-center uppercase">
        <h1 className="text-4xl">Todo-s</h1>
      </div>

      <nav>
        <div className="absolute right-6 md:hidden top-6 scale-150">
          <MenuOutlined
            onClick={showMenu}
            className="scale-150 cursor-pointer"
          />
        </div>

        <ul className="hidden md:flex gap-8 p-6 uppercase bg-white/10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add-to-do">Add ToDo</Link>
          </li>
          <li>
            <Link to="/to-do-list">Todo list</Link>
          </li>
         
          <li>
            <Link to="/important">Important</Link>
          </li>
        </ul>

        <MenuItems showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
};

export default Navbar;
