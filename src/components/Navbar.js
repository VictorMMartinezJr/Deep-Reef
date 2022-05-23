import jellyfish from "../assets/jellyfish.svg";

const Navbar = ({ navActive, setNavActive }) => {
  return (
    <nav className="h-[10vh] w-full text-gray-200  flex justify-between items-center relative">
      {/* Company Logo & Name */}
      <div className="ml-8 flex items-center z-10">
        <img src={jellyfish} alt="" className="h-8" />
        <h2 className="ml-3 font-medium tracking-wide text-lg">DEEP REEF</h2>
      </div>

      {/* Menu Burger */}
      <button
        className="burger mr-8 bg-blue-500 p-3 rounded-full grid place-items-center cursor-pointer z-[3]"
        onClick={() => setNavActive(!navActive)}
      >
        {/* Line 1 */}
        <div
          className={`bg-gray-200 h-[2px] w-[20px] mt-[3px] ${
            navActive
              ? "rotate-45 transform translate-y-[5px] transition-transform duration-300"
              : ""
          }`}
        ></div>

        {/* Line 2 */}
        <div
          className={`bg-gray-200 h-[2px] w-[20px] mt-[3px] ${
            navActive ? "opacity-0 transition-opacity duration-300" : ""
          }`}
        ></div>

        {/* Line 3 */}
        <div
          className={`bg-gray-200 h-[2px] w-[20px] mt-[3px] ${
            navActive
              ? "-rotate-45 transform -translate-y-[5px] transition-transform duration-300"
              : ""
          }`}
        ></div>
      </button>
      {/* Links */}
      <ul
        className={`nav-links flex flex-col items-end absolute right-0 top-[100%] w-[100%] bg-gray-900 bg-opacity-75 backdrop-blur-xl z-[2] ${
          navActive
            ? "transform translate-x-0 transition-transform duration-300"
            : "transform translate-x-[100%] transition-transform duration-300"
        }`}
      >
        <li className=" text-xl font-bold my-4 py-4 mr-8 cursor-pointer">
          How it works?
        </li>
        <li className=" text-xl font-bold my-4 py-4 mr-8 cursor-pointer">
          Roadmap and tokenomics
        </li>
        <li className=" text-xl font-bold my-4 py-4 mr-8 cursor-pointer">
          Charity
        </li>
        <li className=" text-xl font-bold my-4 py-4 mr-8 cursor-pointer">
          How to buy?
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
