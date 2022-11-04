import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import PriceCategory from "./PriceCategory";

const CategoryCart = () => {
  const navigate = useNavigate();
  const handlePrice = (e) => {
    const value = e.target.value;

    if (value === "Default") {
      navigate("");
    } else if (value === "Price High to Low") {
      navigate("price-high-to-low");
    } else {
      navigate("price-low-to-high");
    }
  };

  return (
    <div>
      <PriceCategory handlePrice={handlePrice} />
      <Outlet />
    </div>
  );
};

export default CategoryCart;
