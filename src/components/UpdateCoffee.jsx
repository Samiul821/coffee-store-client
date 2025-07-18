import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { _id, name, chef, price, category, supplire, taste, details, photo } =
    useLoaderData();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());
    console.log(updatedCoffee);

    // send updated coffee to the db
    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Coffee updated successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log("after updated", data);
        }
      });
  };

  return (
    <div>
      <Link
        className="flex items-center font-primary text-xl md:text-[30px] mt-7 md:mt-[50px]"
        to="/"
      >
        <FaArrowLeftLong className="mr-2" /> Back to home
      </Link>
      <div className="p-4 md:px-24 py-3 md:py-[70px] bg-[#f4f3f0] my-7 md:my-[50px] rounded">
        <div className="text-center px-3 md:px-12 mb-6">
          <h1 className="text-[#374151] font-primary text-3xl md:text-5xl mb-4">
            Update Existing Coffee Details
          </h1>
          <p className="font-secondary text-[#1B1A1A70]">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handleUpdateCoffee} className="font-secondary">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="w-full ">
              <label className="label md:text-xl font-semibold text-[#1b1a1a80] mb-3">
                Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                className="input bg-white w-full text-[#1b1a1a70]"
                placeholder="Enter coffee name"
              />
            </fieldset>
            <fieldset className=" w-full ">
              <label className="label md:text-xl font-semibold text-[#1b1a1a80] mb-3">
                Chef
              </label>
              <input
                type="text"
                name="chef"
                defaultValue={chef}
                className="input bg-white w-full text-[#1b1a1a70]"
                placeholder="Enter coffee chef"
              />
            </fieldset>
            <fieldset className=" w-full ">
              <label className="label md:text-xl font-semibold text-[#1b1a1a80] mb-3">
                Supplier
              </label>
              <input
                type="text"
                name="supplire"
                defaultValue={supplire}
                className="input bg-white w-full text-[#1b1a1a70]"
                placeholder="Enter coffee supplier"
              />
            </fieldset>
            <fieldset className=" w-full ">
              <label className="label md:text-xl font-semibold text-[#1b1a1a80] mb-3">
                Taste
              </label>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                className="input bg-white w-full text-[#1b1a1a70]"
                placeholder="Enter coffee taste"
              />
            </fieldset>
            <fieldset className=" w-full ">
              <label className="label md:text-xl font-semibold text-[#1b1a1a80] mb-3">
                Category
              </label>
              <input
                type="text"
                name="category"
                defaultValue={category}
                className="input bg-white w-full text-[#1b1a1a70]"
                placeholder="Enter coffee category"
              />
            </fieldset>
            <fieldset className=" w-full ">
              <label className="label md:text-xl font-semibold text-[#1b1a1a80] mb-3">
                Details
              </label>
              <input
                type="text"
                name="details"
                defaultValue={details}
                className="input bg-white w-full text-[#1b1a1a70]"
                placeholder="Enter coffee details"
              />
            </fieldset>
            <fieldset className=" w-full mb-6">
              <label className="label md:text-xl font-semibold text-[#1b1a1a80] mb-3">
                Price
              </label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                className="input bg-white w-full text-[#1b1a1a70]"
                placeholder="Enter coffee price"
              />
            </fieldset>
            <fieldset className=" w-full mb-6">
              <label className="label md:text-xl font-semibold text-[#1b1a1a80] mb-3">
                Photo
              </label>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                className="input bg-white w-full text-[#1b1a1a70]"
                placeholder="Enter photo URL"
              />
            </fieldset>
          </div>

          <input
            className="w-full bg-[#D2B48C] text-[#331A15] font-primary text-2xl flex items-center py-2 border-[#331A15] border-2 rounded btn h-auto"
            type="submit"
            value="Update Coffee Details"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
