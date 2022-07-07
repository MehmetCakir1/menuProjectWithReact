import React from "react";
import { useState } from "react";
import menu from "../helper/data";
import MenuCard from "./MenuCard";
import Nav from "./Nav";

const MenuList = () => {
  
  const [data, setData] = useState(menu);

  return (
    <div className="m-auto container row">
      <div className="mt-4 m-auto text-center">
        <Nav data={data} setData={setData} />
      </div>
      <div className="menuList m-auto mt-5 col">
        <MenuCard data={data} />
      </div>
    </div>
  );
};

export default MenuList;
