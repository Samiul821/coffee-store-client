import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import Loading from "../components/Loading";
import CoffeeDetails from "../components/CoffeeDetails";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Users from "../components/Users";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:3000/coffees'),
        Component: Home,
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: 'coffee/:id',
        Component: CoffeeDetails
      },
      {
        path: "/addCoffee",
        Component: AddCoffee,
      },
      {
        path: '/updateCoffee/:id',
        loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: UpdateCoffee,
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: "/signin",
        Component: SignIn
      },
      {
        path: "/signup",
        Component: SignUp
      },
      {
        path: 'users',
        Component: Users,
        loader: () => fetch('http://localhost:3000/users'),
        hydrateFallbackElement: <Loading></Loading>
      }
    ],
  },
]);
export default router;
