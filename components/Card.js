import React from "react";

function Card({ image, title, date }) {
  return (
    <div className="flex justify-center scale-100 hover:scale-105 duration-300">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img
            className="rounded-t-lg lg:w-full aspect-video object-cover"
            src={image}
            alt=""
          />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
          <p className="text-gray-500 text-sm font-semibold">{date}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
