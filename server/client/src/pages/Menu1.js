import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem1 from "../components/MenuItem1";
import "../styles/Menu.css";

function Menu1() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Events & Services</h1>
     
      <div className="menuList">
        {MenuList.map((menuItem1, key) => {
          return (
            <MenuItem1
              key={key}
              image={menuItem1.image}
              name={menuItem1.name}
          
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu1;
