import { format } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./AddToDo.css";
import Modal from "./Modal";

//Day Picker Style
const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid currentColor;
  }
  .my-selected:hover:not([disabled]) { 
    border-color: #5580a0;
    color: #5580a0;
}`;
//////////////////////////////////////////
const AddToDo = () => {
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState({});

  const formSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value
    setName(name)
  };
  //////////////////////////////////////////////////



  return (
    <div className="backgroundImage">
      <div className="px-5 pt-36 p-5 rounded-xl">
        <div className="box-shadow bg-[#5580a0] p-8 rounded-xl lg:w-4/5 md:w-4/5 mx-auto">
          <p className="text-center text-4xl">
            <i className="fas fa-check-square me-1 text-[#1d3446]">
              <span className="pl-3 font-serif font-light">ADD TODO-S</span>
            </i>
          </p>

          <div>
            <form onSubmit={formSubmit}>
              <div className="lg:w-11/12 md:w-11/12 mx-auto mt-16 shadow-box h-20 bg-[#81a1b6] grid grid-cols-2 rounded-lg">
                <div className="p-7">
                  <input
                    type="text"
                    name="name"
                    required="true"
                    placeholder="Add New"
                    className="w-full my-auto outline-none bg-[#81a1b6] text-[#1d3446]"
                  />
                  <hr />
                </div>
                <div className="ml-auto my-auto pr-5">
                 <button type="submit">
                 <Modal date={date} name={name} />
                 </button>
                </div>
              </div>
              <div className="lg:w-1/3 md:lg:w-1/3  text-[#1d3446] pt-5 mx-auto">
                <style>{css}</style>
                <DayPicker
                  modifiersClassNames={{
                    selected: "my-selected",
                    today: "my-today",
                  }}
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                />
                <p className="text-center">
                  You have selected: {format(date, "PP")}
                </p>
              </div>
            </form>
            <div className="w-full mx-auto pt-10">
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToDo;
