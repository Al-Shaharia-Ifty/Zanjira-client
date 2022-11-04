import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { MdDoubleArrow } from "react-icons/md";

const ProductDetails = () => {
  const product = useLoaderData();
  const {
    _id,
    img,
    name,
    category,
    price,
    sellPrice,
    productType,
    productBrand,
    speciality,
    delivery,
    color,
    review,
  } = product;
  const [order, setOrder] = useState(null);
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [disablePlus, setDisablePlus] = useState(false);
  const [disableMinus, setDisableMinus] = useState(true);
  let totalPrice = parseInt(sellPrice) + parseInt(delivery);

  const plus = () => {
    console.log("+");
    const quantity = document.getElementById("quantity");
    const totalPrice = document.getElementById("total-product-price");
    const priceNumber = parseInt(sellPrice);
    const quantityNumber = parseInt(quantity.innerText);
    const deliveryNumber = parseInt(delivery);
    if (quantityNumber < 100) {
      const addQuantity = quantityNumber + 1;
      const withOutDelivery = addQuantity * priceNumber;
      const withDelivery = withOutDelivery + deliveryNumber;
      totalPrice.innerText = withDelivery;
      quantity.innerText = addQuantity;
      setOrderQuantity(addQuantity);
      setDisableMinus(false);
    } else {
      setDisablePlus(true);
    }
  };

  const minus = () => {
    console.log("-");
    const quantity = document.getElementById("quantity");
    const totalPrice = document.getElementById("total-product-price");
    const priceNumber = parseInt(sellPrice);
    const deliveryNumber = parseInt(delivery);
    const quantityNumber = parseInt(quantity.innerText);
    if (quantityNumber > 1) {
      const addQuantity = quantityNumber - 1;
      const withOutDelivery = addQuantity * priceNumber;
      const withDelivery = withOutDelivery + deliveryNumber;
      totalPrice.innerText = withDelivery;
      quantity.innerText = addQuantity;
      setOrderQuantity(addQuantity);
      setDisablePlus(false);
    } else {
      setDisableMinus(true);
    }
  };

  return (
    <div className="min-h-screen mx-10">
      <div className="flex items-center my-5 ">
        <Link to={`/`} className="md:text-md lg:text-lg text-sm">
          Home
        </Link>
        <MdDoubleArrow className="mx-2" />
        <Link
          className="md:text-md lg:text-lg text-sm"
          to={`../category/${category}`}
        >
          {category}
        </Link>
        <MdDoubleArrow className="mx-2" />
        <h2 className="md:text-md lg:text-lg text-sm">{name}</h2>
      </div>
      <h2 className="lg:text-3xl md:text-2xl text-xl font-bold">{name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
        <img src={img} alt="" />
        <div>
          <h2 className="lg:text-3xl md:text-2xl text-xl font-bold">{name}</h2>
          <div className="grid md:grid-cols-3 grid-cols-2  mt-3">
            <div>
              <p className="text-2xl text-orange-500 font-bold">
                ৳ {sellPrice}
              </p>
              <del className="text-gray-400">৳ {price}</del>
            </div>
            <div>
              <p>
                Delivery Charge: <span className="font-bold">৳{delivery}</span>
              </p>
            </div>
          </div>
          <div className="my-5">
            <p>
              <span className="font-bold">Product Type: </span>
              {productType}
            </p>
            <p>
              <span className="font-bold">Brand Name: </span>
              {productBrand}
            </p>
            <p>
              <span className="font-bold">Speciality: </span>
              {speciality}
            </p>
            {color ? (
              <p>
                <span className="font-bold">Color: </span>
                {color}
              </p>
            ) : (
              <span></span>
            )}
          </div>
          <div className="flex items-center my-5">
            <p>Quantity:</p>
            <button
              id="minus-button"
              onClick={minus}
              className={
                disableMinus
                  ? "btn  ml-2 text-2xl opacity-50 cursor-not-allowed"
                  : "btn  ml-2 text-2xl"
              }
            >
              -
            </button>
            <p id="quantity" className="px-5 font-bold">
              {orderQuantity}
            </p>
            <button
              id="plus-button"
              onClick={plus}
              className={
                disablePlus
                  ? "btn  ml-2 text-2xl opacity-50 cursor-not-allowed"
                  : "btn  ml-2 text-2xl"
              }
            >
              +
            </button>
            <p className="ml-5">
              Total Price :{" "}
              <span id="total-product-price" className="font-bold">
                {totalPrice}
              </span>{" "}
              Tk
            </p>
          </div>
          <button className="btn btn-accent">Order Now</button>
          <div className="mt-10">
            <button className="btn btn-warning mr-3">Add to Cart</button>
            <button className="btn btn-warning">Add to Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
