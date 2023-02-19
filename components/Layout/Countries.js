import Image from "next/image";
import React from "react";
import india from "../../public/india.png";
import us from "../../public/us.png";
import uk from "../../public/uk.png";
import uae from "../../public/uae.png";

export const Countries = () => {
  return (
    <div className=" flex justify-between p-3 text-lg lg:text-xl font-semibold  lg:2 text-center my-12 lg:my-16">
      <div className=" bg-orange-500 hover:bg-blue-900 shadow-lg hover:shadow-md hover:shadow-blue-900 scale-100 hover:scale-110 duration-300 rounded-full p-[3px] lg:p-[5px] h-[70px] w-[70px] lg:h-[90px] lg:w-[90px]">
        <Image
          src={india}
          className=" lg:h-20 lg:w-20 "
          height={65}
          width={65}
        />
        <p className=" m-2">India</p>
      </div>

      <div className=" bg-orange-500 hover:bg-blue-900 shadow-lg hover:shadow-md hover:shadow-blue-900 scale-100 hover:scale-110 duration-300 rounded-full p-[3px] lg:p-[5px] h-[70px] w-[70px] lg:h-[90px] lg:w-[90px]">
        <Image
          src={us}
          className=" lg:h-20 lg:w-20 "
          height={65}
          width={65}
        />
        <p className=" m-2">U.S</p>
      </div>

      <div className=" bg-orange-500 hover:bg-blue-900 shadow-lg hover:shadow-md hover:shadow-blue-900 scale-100 hover:scale-110 duration-300 rounded-full p-[3px] lg:p-[5px] h-[70px] w-[70px] lg:h-[90px] lg:w-[90px]">
        <Image
          src={uk}
          className=" lg:h-20 lg:w-20 "
          height={65}
          width={65}
        />
        <p className=" m-2">U.K</p>
      </div>

      <div className=" bg-orange-500 hover:bg-blue-900 shadow-lg hover:shadow-md hover:shadow-blue-900 scale-100 hover:scale-110 duration-300 rounded-full p-[3px] lg:p-[5px] h-[70px] w-[70px] lg:h-[90px] lg:w-[90px]">
        <Image
          src={uae}
          className=" lg:h-20 lg:w-20 "
          height={65}
          width={65}
        />
        <p className=" m-2">UAE</p>
      </div>
    </div>
  );
};
