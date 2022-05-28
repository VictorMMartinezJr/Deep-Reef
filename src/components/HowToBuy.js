const HowToBuy = () => {
  return (
    <section className="bg-black h-[100vh] text-white flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h2 className="z-[2] text-4xl mt-20 mb-4 font-bold">HOW TO BUY?</h2>
        <p className="text-gray-300">
          Buying a token on the PancakeSwap exchange
        </p>
      </div>
      <p className="w-[80%] text-center mt-8 text-gray-300 lg:w-[50%] 2xl:w-[30%]">
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
