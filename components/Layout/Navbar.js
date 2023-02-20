import React from "react";

const Navbar = () => {
  return (
    <div className=" flex items-center justify-between gap-4 lg:gap-40 ">
      <div>
        <h1 className=" flex items-center text-blue-900 text-[21px] lg:text-[45px] font-extrabold lg:font-black italic">
          News
          <span className="text-orange-600 font-bold lg:font-extrabold text-[32px] lg:text-6xl">
            2
          </span>
          Day
        </h1>
      </div>

      <div>
        <form>
          <div className=" flex ">
            <input
              type="text"
              required
              autoComplete="on"
              placeholder="Search recipes"
              className=" w-[200px] lg:w-[500px] flex border-4 border-blue-900 rounded-l-full p-[5px] px-6 lg:p-3 lg:px-6"
            />
            <button
              type="submit"
              className=" bg-blue-900  text-orange-500  font-bold lg:font-extrabold rounded-r-full p-[5px] px-2 lg:p-3 lg:px-7 lg:text-lg"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
