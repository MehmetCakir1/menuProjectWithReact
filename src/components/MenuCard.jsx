import React from "react";

const MenuCard = ({ data }) => {
  console.log(data);
  return (
    <div className="row m-auto menu-container">
      {data.map((item) => {
        const { id, title, desc, img, price } = item;
        return (
          <div className="mt-3 px-1 m-auto  col-xl-6 d-md-flex justify-content-center align-items-start menuBox">
            <div className="imgDiv border border-2 border-dark rounded-3 col-md-2 col-xl-2 m-auto p-1">
              <img className="rounded-3 " src={img} alt={title} />
            </div>
            <div className=" content m-auto">
              <div className="d-flex justify-content-between align-items-center pt-3 px-1">
                <h5>
                  {title
                    .split(" ")
                    .map((item) => item[0].toUpperCase() + item.slice(1))
                    .join(" ")}
                </h5>
                <h5>${price}</h5>
              </div>
              <p className="text-center desc py-3 ">{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuCard;
