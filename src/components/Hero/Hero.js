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
        } min-h-[90vh] flex flex-col justify-evenly items-center lg:items-start mt-8`}
      >
        {/* Main Text */}
        <div className="text-white text-center w-[90%] xs:text-left md:ml-0 md:mt-20 lg:ml-8 xl:w-[55%] xl:ml-16 2xl:w-[45%]">
          <h1 className="font-medium text-3xl xs:text-4xl xs:leading-[1.2] xs:w-[80%] sm:text-5xl md:text-6xl md:w-full lg:w-[80%] lg:leading-[1.2] xl:w-full xl:tracking-wide 2xl:w-[87%]">
            SIMPLE INVESTMENTS IN THE STOCK MARKET FOR EVERYONE
          </h1>
          <p className="mt-8 text-xl w-full tracking-wide lg:w-[85%] xl:w-full">
            Our project is aimed at simplifying the process of investing in the
            stock market and saving time on training. Our goal is to simplify
            the experience of investing in stocks and cryptocurrencies
          </p>
        </div>

        {/* Button Links */}
        <div className="btns text-white flex flex-col items-center w-[100%] my-8 md:mt-20 lg:items-start lg:ml-8 lg:flex-row lg:w-[60%] lg:justify-between xl:w-[50%] xl:ml-16 2xl:w-[40%]">
          <a
            href="#"
            className="bg-gradient-to-r from-[#000046] to-[#1CB5E0] py-6 px-10 rounded-2xl text-lg font-bold text-center md:px-20 lg:w-[60%] lg:text-xl lg:py-10"
          >
            BUY DEEP REEF
          </a>
          <a
            href="#"
            className="mt-10 mb-8 font-bold tracking-wide text-lg relative after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-full after:bg-[#1CB5E0] lg:text-xl lg:mt-0 lg:pt-10"
          >
            WHITE PAPER
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
