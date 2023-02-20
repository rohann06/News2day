import React from "react";

function Card({ image, title, date }) {
  return (
    <div className=" rounded-lg">
      <div class=" grid gap-5 rounded-lg shadow-lg bg-white max-w-sm p-3">

        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img class="" src={image} alt="News cover"  className=" rounded-t-lg w-full aspect-video object-cover"/>
        </a>

        <div>
          <h5 class="text-gray-900 text-xl font-medium ">{title}</h5>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
