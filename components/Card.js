import { useRouter } from "next/router";
import React, { useState } from "react";

function Card({ image, title, date, description }) {
  const [show, setShow] = useState(false);

  return (
    <div onClick={()=>setShow(!show)} className="flex justify-center scale-100 hover:scale-105 duration-300">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img
            className="rounded-t-lg lg:w-full aspect-video object-cover"
            src={image}
            alt="image"
          />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-semibold mb-2">{title}</h5>
          {show ? <p className=" my-3">{description}</p> : null}

          <p className="text-gray-500 text-sm font-semibold">{date}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
