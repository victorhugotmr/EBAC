import React, { useState } from "react"
import Card from './Card'
import sneakers from './data/sneakers'
import Buttons from './Buttons'
import './App.css'



const App = () => {
  const [item, setItem] = useState(sneakers);

  const menuItems = [...new Set(sneakers.map((Val) => Val.brand))];

  const filterItem = (curcat) => {
    const newItem = sneakers.filter((newVal) => {
      return newVal.brand === curcat;
    });
    setItem(newItem);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <h1 className="col-12 text-center my-3 fw-bold">Sneaker Filter</h1>
          <Buttons
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
          <Card item={item} />
        </div>
      </div>
    </>
  );
};

export default App;