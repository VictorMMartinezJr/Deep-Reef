import "./Hero.css";
import Navbar from "../Navbar";
import { useState } from "react";

const Hero = () => {
  const [navActive, setNavActive] = useState(false);

  return (
    <section className="hero">
      <Navbar navActive={navActive} setNavActive={setNavActive} />
      <div className={`${navActive ? "blur-sm" : ""}`}>
        {/* Main Text */}
        <div className="ml-8 mt-8 text-white w-[80%]">
          <h1 className="font-medium text-5xl w-[85%] leading-[1.2]">
            SIMPLE INVESTMENTS IN THE STOCK MARKET FOR EVERYONE
          </h1>
          <p className="mt-8 text-xl w-[85%] tracking-wide">
            Our project is aimed at simplifying the process of investing in the
            stock market and saving time on training. Our goal is to simplify
            the experience of investing in stocks and cryptocurrencies
          </p>
        </div>

        {/* Button Links */}
        <div className="btns text-white flex flex-col items-center w-[100%] mt-8">
          <a
            href="#"
            className="bg-gradient-to-r from-[#000046] to-[#1CB5E0] w-[85%] py-10 rounded-2xl text-2xl font-bold text-center"
          >
            BUY DEEP REEF
          </a>
          <a
            href="#"
            className="mt-8 font-bold tracking-wide text-2xl relative after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-full after:bg-[#1CB5E0]"
          >
            WHITE PAPER
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
