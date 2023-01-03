import React from "react";
 
const Card = ({ item }) => {            
  
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {item.map((Val) => {
            return (
              <div
                className="col-md-4 col-sm-6 card my-3 py-3 p-3 m-3 border-0"
                key={Val.id}
              >
                <div className="card-img-top text-center">
                  <img src={Val.image} alt={Val.name} className="photo w-75" />
                </div>
                <div className="card-body text-center">
                  <div className="card-title fw-bold fs-4">
                  {Val.brand} {Val.name}
                  </div>
                  <h5>{Val.price} - {Val.year}</h5>
                  <button type="button" className="btn btn-primary">Buy Here</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
 
export default Card;