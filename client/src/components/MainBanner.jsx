import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const MainBanner = () => {
  return (
    <div className="relative">
      <img
        src={assets.main_banner_bg}
        alt="banner"
        className="w-full hidden md:block"
      />
      <img
        src={assets.main_banner_bg_sm}
        alt="banner"
        className="w-full md:hidden"
      />

      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-36 md:pb-0 px-4 md:pl-18 lg:pl-24">
        <h1 className="ext-3x1 hidden md:block  md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15">
          Freshness You Can Trust, Savings You will Love!
        </h1>

        <div className="md:hidden flex flex-col justify-center items-center gap-1 ">
          <p>Freshness You Can Trust</p>
          <p>Savings You will Love!</p>
        </div>

        <div className="flex items-center mt-6 font-medium">
          <Link
            to={"/products"}
            className="roup flex items-center gap-2 px-7 mt-4 md:mt-0 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer"
          >
            Shop now
          </Link>
          {/* <img
            src={assets.white_arrow_icon}
            alt="arrow"
            className="md:hidden transition group-focus:translate-x-1"
          /> */}
          {/* <Link
            to={"/products"}
            className="group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer"
          >
            Explore deals
          </Link> */}

          <img
            src={assets.black_arrow_icon}
            alt="arrow"
            className="transition hidden md:block group-hover:translate-x-1 ml-4 w-4"
          />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
