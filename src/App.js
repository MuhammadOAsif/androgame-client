import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddToDo from "./Components/AddToDo/AddToDo";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import ToDoList from "./Components/ToDoList/ToDoList";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add-to-do" element={<AddToDo/>}></Route>
        <Route path="/to-do-list" element={<ToDoList/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
