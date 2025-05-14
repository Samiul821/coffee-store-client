import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const AddCoffee = () => {
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
            Add Coffee
          </h1>
          <p className="font-secondary text-[#1B1A1A70]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using "Content here".
          </p>
        </div>
        <form className="font-secondary">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="w-full ">
              <label className="label md:text-xl font-semibold text-[#1b1a1a80] mb-3">
                Name
              </label>
              <input
                type="text"
                name="name"
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
                className="input bg-white w-full text-[#1b1a1a70]"
                placeholder="Enter coffee details"
              />
            </fieldset>
          </div>
          <fieldset className=" w-full my-6">
            <label className="label md:text-xl font-semibold text-[#1b1a1a80] mb-3">
              Photo
            </label>
            <input
              type="text"
              name="photo"
              className="input bg-white w-full text-[#1b1a1a70]"
              placeholder="Enter photo URL"
            />
          </fieldset>

          <input className="w-full bg-[#D2B48C] text-[#331A15] font-primary text-2xl flex items-center py-2 border-[#331A15] border-2 rounded btn h-auto" type="submit" value="Add Coffee" />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
