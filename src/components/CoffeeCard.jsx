import React from "react";
import { FaPen } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, price, photo } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      // console.log(result.isConfirmed);
      if (result.isConfirmed) {
        // start deleting the coffee
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });

              // remove the coffee from the state
              const remainingCoffees = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remainingCoffees);
            }
          });
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.3 }}
      className="bg-[#fdfcfb] p-4 md:p-6 rounded-2xl shadow-sm hover:shadow-md flex flex-col md:flex-row items-center gap-4"
    >
      {/* Image */}
      <img
        className="w-[100px] h-[140px] md:w-[140px] md:h-[200px] lg:w-[180px] lg:h-[240px] object-cover rounded-md"
        src={photo}
        alt={name}
      />

      {/* Info */}
      <div className="flex-1 text-center md:text-left space-y-2">
        <p className="text-[#333] text-base md:text-lg">
          <span className="font-semibold">Name:</span> {name}
        </p>
        <p className="text-[#555] text-base md:text-lg">
          <span className="font-semibold">Quantity:</span> {quantity}
        </p>
        <p className="text-[#444] text-base md:text-lg">
          <span className="font-semibold">Price:</span> {price} Tk
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex md:flex-col gap-2">
        <Link to={`/coffee/${_id}`}>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-[#D2B48C] p-3 rounded-md shadow hover:shadow-lg"
          >
            <IoMdEye className="text-white text-lg" />
          </motion.button>
        </Link>

        <Link to={`/updateCoffee/${_id}`}>
          <motion.button
            whileHover={{ scale: 1.1, rotate: -2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-[#3c393b] p-3 rounded-md shadow hover:shadow-lg"
          >
            <FaPen className="text-white text-lg" />
          </motion.button>
        </Link>

        <motion.button
          onClick={() => handleDelete(_id)}
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-[#ea4744] p-3 rounded-md shadow hover:shadow-lg"
        >
          <MdDelete className="text-white text-lg" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CoffeeCard;
