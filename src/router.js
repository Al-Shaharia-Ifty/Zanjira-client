import { createBrowserRouter } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Main from "./Layout/Main";
import ErrorPage from "./Shared/ErrorPage";
import ProductDetails from "./Components/ProductDetails";
import CategoryCart from "./Components/CategoryCart";
import DefaultProduct from "./Components/DefaultProduct";
import PriceHighToLow from "./Components/PriceHighToLow";
import PriceLowToHigh from "./Components/PriceLowToHigh";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: () => fetch("http://localhost:5000/products"),
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <DefaultProduct />,
            loader: () => fetch("http://localhost:5000/products"),
          },
          {
            path: "/home",
            element: <DefaultProduct />,
            loader: () => fetch("http://localhost:5000/products"),
          },
          {
            path: "/price-high-to-low",
            element: <PriceHighToLow />,
            loader: () => fetch("http://localhost:5000/products"),
          },
          {
            path: "/price-low-to-high",
            element: <PriceLowToHigh />,
            loader: () => fetch("http://localhost:5000/products"),
          },
        ],
      },
      {
        path: "/home",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/category/:name",
        element: <CategoryCart />,

        children: [
          {
            path: "/category/:name",
            element: <DefaultProduct />,
            loader: ({ params }) =>
              fetch(`http://localhost:5000/category/${params.name}`),
          },
          {
            path: "/category/:name/price-high-to-low",
            element: <PriceHighToLow />,
            loader: ({ params }) =>
              fetch(`http://localhost:5000/category/${params.name}`),
          },
          {
            path: "/category/:name/price-low-to-high",
            element: <PriceLowToHigh />,
            loader: ({ params }) =>
              fetch(`http://localhost:5000/category/${params.name}`),
          },
        ],
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
