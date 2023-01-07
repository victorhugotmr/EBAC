import React from "react";
import sneakers from "./data/sneakers";

const Buttons = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
      <div className="d-flex justify-content-center row">
        {menuItems.map((Val, id) => {
          return (
            <button
              className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold col mb-3"
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}
        <button
          className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn col"
          onClick={() => setItem(sneakers)}
        >
          All
        </button>
       </div>
    </>
  );
};
 
export default Buttons;