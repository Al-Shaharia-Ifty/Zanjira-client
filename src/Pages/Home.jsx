import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import PriceCategory from "../Components/PriceCategory";
const Home = () => {
  const navigate = useNavigate();
  const handlePrice = (e) => {
    const value = e.target.value;

    if (value === "Default") {
      navigate("/home");
    } else if (value === "Price High to Low") {
      navigate("/price-high-to-low");
    } else {
      navigate("/price-low-to-high");
    }
  };
  // title name
  useEffect(() => {
    document.title = "Home - Zanjira";
  }, []);

  return (
    <div className="min-h-screen">
      <PriceCategory handlePrice={handlePrice} />
      <Outlet />
    </div>
  );
};

export default Home;
