import React from "react";

const PriceCategory = ({ handlePrice }) => {
  return (
    <div>
      <div className="flex flex-row-reverse mx-5 mt-5 ">
        <select
          onChange={handlePrice}
          className="select select-accent w-full max-w-xs"
        >
          <option disabled selected>
            Price Category
          </option>
          <option>Default</option>
          <option>Price High to Low</option>
          <option>Price Low to High </option>
        </select>
      </div>
    </div>
  );
};

export default PriceCategory;
