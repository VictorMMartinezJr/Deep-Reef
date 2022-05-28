import jellyfish from "../assets/jellyfish.svg";
import copyright from "../assets/copyright.svg";

const Footer = () => {
  return (
    <footer className=" w-full text-gray-300 flex flex-col justify-between items-center bg-[#141E30] relative z-10 lg:flex-row">
      <div className="overlay"></div> {/* Used to darken background*/}
      {/* Company Logo & Name */}
      <div className="mt-8 flex items-center z-10 xl:ml-16 lg:mt-0 lg:ml-4">
        <img src={jellyfish} alt="" className="h-8" />
        <h2 className="ml-3 font-medium tracking-wide text-lg">DEEP REEF</h2>
      </div>
      {/* Nav Links */}
      <nav className="z-10 my-8 lg:my-0">
        <ul className="my-4 text-center lg:flex lg:justify-center lg:items-center">
          {/* Link 1 */}
          <li className="py-4 cursor-pointer">
            <a href="#howitworks">How it works</a>
          </li>
          {/* Link 2 */}
          <li className="py-4 cursor-pointer lg:mx-8 xl:mx-16">
            <a href="#roadmap">Roadmap and tokenomics</a>
          </li>
          {/* Link 3 */}
          <li className="py-4 cursor-pointer">
            <a href="#howtobuy">How to buy?</a>
          </li>
        </ul>
      </nav>
      {/* Copyright */}
      <span className="copyright flex justify-center items-center text-xs z-10 mb-8 lg:mb-0 lg:mr-4 xl:mr-16">
        <img src={copyright} alt="copyright" className="h-4 mr-2" />
        <p>VictorMtzCodes 2022</p>
      </span>
    </footer>
  );
};

export default Footer;
