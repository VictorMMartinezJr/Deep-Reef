const HowToBuy = () => {
  return (
    <section
      className="bg-black text-white flex flex-col items-center"
      id="howtobuy"
    >
      <div className="flex flex-col items-center">
        <h2 className="z-[2] text-2xl mt-20 mb-4 font-bold sm:text-3xl">
          HOW TO BUY?
        </h2>
        <p className="text-gray-300 text-center">
          Buying a token on the PancakeSwap exchange
        </p>
      </div>
      <p className="w-[90%] text-center mt-8 mb-20 text-gray-300 lg:w-[50%] 2xl:w-[30%]">
        <span className="text-blue-600">1. </span>
        Download and install the Meta Mask wallet. (If from a computer, then
        just download the browser extension){" "}
        <a href="#" className="text-blue-600">
          https://metamask.io/
        </a>
      </p>
    </section>
  );
};

export default HowToBuy;
