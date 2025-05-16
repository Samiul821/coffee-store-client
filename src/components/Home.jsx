import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const initialCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(initialCoffees);

  return (
    <div>
      <div className="flex flex-col items-center mt-[50px] md:mt-[120px]">
        <p className="md:text-xl font-secondary text-[#1b1a1a]">
          --- Sip & Savor ---
        </p>
        <h1 className="text-3xl md:text-[55px] font-primary text-[#331a15] mt-1 md:mt-2">
          Our Popular Products
        </h1>
        <Link
          to="/addCoffee"
          className="py-[9px] px-[22px] bg-[#e3b577] md:text-2xl font-primary text-white border-2 border-[#331a15] rounded-[5px] mt-4"
        >
          Add Coffee
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-[50px]">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffees={coffees}
            setCoffees={setCoffees}
            coffee={coffee}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
