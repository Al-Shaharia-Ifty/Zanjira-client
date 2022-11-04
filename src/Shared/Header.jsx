import React from "react";
import { AiOutlineSearch, AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Header = () => {
  const data = useLoaderData();
  const allCategory = data.map((c) => c.category);
  const category = allCategory.filter(
    (item, index) => allCategory.indexOf(item) === index
  );

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div>
      <div className="bg-[#ff0000] w-full grid md:grid-cols-5 grid-cols-3">
        {/* dropdown */}
        <div className="md:flex hidden justify-center items-center">
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="btn btn-ghost text-white m-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
              <h2 className="ml-1 font-medium">Top Categories</h2>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              {category.map((c) => (
                <li>
                  <Link
                    className="font-medium hover:text-warning duration-300"
                    to={`../category/${c}`}
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* input */}
        <div className="md:col-span-3 col-span-2 lg:mx-20 md:mx-10 sm:mx-2 p-2 flex justify-center">
          <input
            className="w-full rounded-l-full px-5"
            placeholder="Search Products"
            type="text"
          />
          <button className="btn btn-warning hover:btn-success text-white text-2xl rounded-r-full px-5">
            <AiOutlineSearch />
          </button>
        </div>
        {/* cart */}
        <div className="flex items-center justify-center text-2xl sm:mr-2 text-white">
          <button className="mr-2">
            <AiOutlineUser />
          </button>
          <button className="mr-2">
            <AiOutlineHeart />
          </button>
          <button className="mr-2">
            <BsHandbag />
          </button>
        </div>
      </div>
      <div className="md:hidden">
        <Carousel arrows={false} responsive={responsive}>
          {category.map((c) => (
            <div className="px-12 bg-green-300 text-center">
              <Link className="" to={`../category/${c}`}>
                {c}
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Header;
