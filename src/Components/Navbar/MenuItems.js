import { Close } from "@material-ui/icons";
import { Link } from "react-router-dom";

const MenuItems = ({ showMenu, active }) => {
  return (
    <ul
      className={
        active
          ? "flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden"
          : "hidden"
      }
    >
      <Close onClick={showMenu} className="cursor-pointer" />
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
        <Link to="/Important">Important</Link>
      </li>
    </ul>
  );
};

export default MenuItems;
