import "./Hero.css";
import Navbar from "../Navbar";
import { useState } from "react";

const Hero = () => {
  const [navActive, setNavActive] = useState(false);

  return (
    <section className="hero after-blur relative ">
      <Navbar navActive={navActive} setNavActive={setNavActive} />
      <div
        className={`${
          navActive ? "blur-sm" : ""
        } h-[90vh] flex flex-col justify-evenly items-center lg:items-start`}
      >
        {/* Main Text */}
        <div className="text-white w-[80%] md:ml-0 md:mt-20 lg:ml-8 xl:w-[55%] xl:ml-16 2xl:w-[45%]">
          <h1 className="font-medium text-4xl leading-[1.2] md:text-6xl md:w-full lg:w-[80%] lg:leading-[1.2] xl:w-full xl:tracking-wide 2xl:w-[87%]">
            SIMPLE INVESTMENTS IN THE STOCK MARKET FOR EVERYONE
          </h1>
          <p className="mt-8 text-xl w-full tracking-wide md:w-full lg:w-[85%] xl:w-full">
            Our project is aimed at simplifying the process of investing in the
            stock market and saving time on training. Our goal is to simplify
            the experience of investing in stocks and cryptocurrencies
          </p>
        </div>

        {/* Button Links */}
        <div className="btns text-white flex flex-col items-center w-[100%] mb-20 md:mt-20 lg:items-start lg:ml-8 lg:flex-row lg:w-[60%] lg:justify-between xl:w-[50%] xl:ml-16 2xl:w-[40%]">
          <a
            href="#"
            className="bg-gradient-to-r from-[#000046] to-[#1CB5E0] w-[85%] py-8 rounded-2xl text-2xl font-bold text-center md:w-[80%] lg:w-[60%] lg:text-xl lg:py-10"
          >
            BUY DEEP REEF
          </a>
          <a
            href="#"
            className="mt-10 font-bold tracking-wide text-2xl relative after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-full after:bg-[#1CB5E0] lg:text-xl lg:mt-0 lg:pt-10"
          >
            WHITE PAPER
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
