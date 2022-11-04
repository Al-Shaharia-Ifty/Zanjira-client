import React from "react";
import { Outlet } from "react-router-dom";
import PriceCategory from "../Components/PriceCategory";

const Home = () => {
  const handlePrice = (e) => {
    const value = e.target.value;

    if (value === "Default") {
    } else if (value === "Price High to Low") {
    } else {
    }
  };
  return (
    <div className="min-h-screen">
      <PriceCategory handlePrice={handlePrice} />
      <Outlet />
    </div>
  );
};

export default Home;
// product = data.sort((a, b) => b.sellPrice - a.sellPrice);
