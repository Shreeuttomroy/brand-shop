import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Addproduct from "./Addproduct/AddProduct.jsx";
import Brands from "./Brands/Brands.jsx";
import Details from "./Details/Details.jsx";
import AddCart from "./AddCart/AddCart.jsx";
import Update from "./Update/Update.jsx";
import Login from "./Login/Login.jsx";
import Register from "./Register/Register.jsx";
import Profile from "./Profile/Profile.jsx";
import ErrorPage from "./ErrorPage/Errorpage.jsx";
import AuthProver from "./AuthProvider/AuthProvider.jsx";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "",
        element: <Home></Home>,
        loader: () => fetch("https://brand-show-server.vercel.app/"),
      },
      {
        path: "addproduct",
        element: <PrivateRoutes><Addproduct></Addproduct></PrivateRoutes>,
      },
      {
        path: "/:brands",
        loader: ({ params }) => fetch(`https://brand-show-server.vercel.app/${params.brands}`),
        element: <Brands></Brands>,
      },
      {
        path: "details/:id",
        loader: ({ params }) =>
          fetch(`https://brand-show-server.vercel.app/details/${params.id}`),
        element: <PrivateRoutes><Details></Details></PrivateRoutes>,
      },
      {
        path: "addcart",
        loader: () => fetch(`https://brand-show-server.vercel.app/addcart`),
        element: <PrivateRoutes><AddCart></AddCart></PrivateRoutes>,
      },
      {
        path: "update/:id",
        loader: ({ params }) =>
          fetch(`https://brand-show-server.vercel.app/update/${params.id}`),
        element: <PrivateRoutes><Update></Update></PrivateRoutes>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "profile",
        element: <PrivateRoutes><Profile></Profile></PrivateRoutes>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProver>
      <RouterProvider router={router}></RouterProvider>
    </AuthProver>
  </React.StrictMode>
);
