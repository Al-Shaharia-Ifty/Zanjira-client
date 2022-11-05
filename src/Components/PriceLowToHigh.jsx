import React from "react";
import { BsHeart } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";

const PriceLowToHigh = () => {
  const data = useLoaderData();
  const product = data.sort((a, b) => a.sellPrice - b.sellPrice);

  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 p-10  ">
        {product.map((p) => (
          <div
            data-aos="fade-up"
            data-aos-duration="400"
            className="rounded-lg bg-blue-100 relative love-show"
            key={p._id}
          >
            <button
              onClick={() => console.log("hello")}
              className="bg-warning hover:bg-red-500 duration-200 hover:text-white love-button text-xl rounded-full p-3 absolute top-3 left-3"
            >
              <BsHeart />
            </button>
            <Link to={`../../product/${p._id}`}>
              <div className="h-80">
                <img
                  className="w-full h-full rounded-t-lg "
                  src={p.img}
                  alt=""
                />
              </div>
              <div className="mx-5 pb-16">
                <h2 className="font-bold md:text-xl text-md text-center mt-3">
                  {p.name}
                </h2>
                <div className="flex justify-center mt-3">
                  <del className="mr-3 md:text-lg text-sm">{p.price}.00৳</del>
                  <p className="font-bold md:text-lg text-sm">
                    {p.sellPrice}.00৳
                  </p>
                </div>
              </div>
            </Link>
            <button
              onClick={() => console.log("hello")}
              className="btn btn-warning absolute bottom-3 right-3"
            >
              add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceLowToHigh;
