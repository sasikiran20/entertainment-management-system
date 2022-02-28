import React from "react";
import { Link } from "react-router-dom";






function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <center><h> {name} </h></center>
      <center><Link to="/login">
        <button>
          Book Now
          </button></Link></center>
         
      
    </div>
  );
}

export default MenuItem;
