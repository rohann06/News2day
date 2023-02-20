import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Navbar = () => {
  const[input, setInput] = useState("")
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/searched/${input}`);
    setInput('');
  };

  return (
    <div className=" flex items-center justify-between gap-4 lg:gap-40 ">
      <Link href={"/"}>
        <div>
          <h1 className=" flex items-center text-blue-900 text-[21px] lg:text-[45px] font-extrabold lg:font-black italic">
            News
            <span className="text-orange-600 font-bold lg:font-extrabold text-[32px] lg:text-6xl">
              2
            </span>
            Day
          </h1>
        </div>
      </Link>

      <div>
        <form action=" submit" onSubmit={submitHandler }>
          <div className=" flex ">
            <input
              type="text"
              required
              onChange={(e) => setInput(e.target.value)}
              value={input}
              autoComplete="on"
              placeholder="Search recipes"
              className=" w-[180px] lg:w-[500px] flex border-4 border-blue-900 rounded-l-full p-[5px] px-6 lg:p-3 lg:px-6 text-sm lg:text-base lowercase"
            />
            <button
              type="submit"
              className=" bg-blue-900  text-orange-500  font-bold lg:font-extrabold rounded-r-full p-[5px] px-2 lg:p-3 lg:px-7 lg:text-lg text-sm"
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
