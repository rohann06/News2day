import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

// Countries Images
import india from "../../public/india.png";
import us from "../../public/us.png";
import uk from "../../public/uk.png";
import uae from "../../public/uae.png";

export const Countries = () => {
  const router = useRouter();

  return (
    <div className=" flex justify-between p-1 lg:p-3 text-lg lg:text-xl font-semibold  lg:2 text-center my-10 lg:my-16">
      <button onClick={() => router.push("/countryNwes/india")}>
        <div className=" bg-orange-500 hover:bg-blue-900 shadow-lg hover:shadow-md hover:shadow-blue-900 scale-100 hover:scale-110 duration-300 rounded-full p-[3px] lg:p-[5px] h-[60px] w-[60px] lg:h-[90px] lg:w-[90px]">
          <Image
            src={india}
            className=" lg:h-20 lg:w-20 "
            height={65}
            width={65}
          />
          <p className=" m-2">India</p>
        </div>
      </button>

      <button onClick={() => router.push("/countryNwes/usa")}>
        <div className=" bg-orange-500 hover:bg-blue-900 shadow-lg hover:shadow-md hover:shadow-blue-900 scale-100 hover:scale-110 duration-300 rounded-full p-[3px] lg:p-[5px] h-[60px] w-[60px] lg:h-[90px] lg:w-[90px]">
          <Image
            src={us}
            className=" lg:h-20 lg:w-20 "
            height={65}
            width={65}
          />
          <p className=" m-2">U.S</p>
        </div>
      </button>

      <button onClick={() => router.push("/countryNwes/uk")}>
        <div className=" bg-orange-500 hover:bg-blue-900 shadow-lg hover:shadow-md hover:shadow-blue-900 scale-100 hover:scale-110 duration-300 rounded-full p-[3px] lg:p-[5px] h-[60px] w-[60px] lg:h-[90px] lg:w-[90px]">
          <Image
            src={uk}
            className=" lg:h-20 lg:w-20 "
            height={65}
            width={65}
          />
          <p className=" m-2">U.K</p>
        </div>
      </button>

      <button onClick={() => router.push("/countryNwes/uae")}>
        <div className=" bg-orange-500 hover:bg-blue-900 shadow-lg hover:shadow-md hover:shadow-blue-900 scale-100 hover:scale-110 duration-300 rounded-full p-[3px] lg:p-[5px] h-[60px] w-[60px] lg:h-[90px] lg:w-[90px]">
          <Image
            src={uae}
            className=" lg:h-20 lg:w-20 "
            height={65}
            width={65}
          />
          <p className=" m-2">UAE</p>
        </div>
      </button>
    </div>
  );
};
