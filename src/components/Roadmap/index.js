import Card from "../Card";
import { RoadmapData } from "./CardData";

const Roadmap = () => {
  return (
    <section
      className="roadmap h-auto flex flex-col items-center text-white bg-gradient-to-b from-[#061d37] to-[#000] relative after:absolute after:left-0 after:ml-5 after:h-[90%] after:w-[1px] after:bg-blue-700 after:bottom-0 lg:after:left-auto"
      id="roadmap"
    >
      <div className="overlay"></div> {/* Used to darken gradient background*/}
      <h2 className="z-[2] text-2xl mt-20 mb-8 font-bold text-center sm:text-3xl">
        ROADMAP & TOKENOMICS
      </h2>
      <div className="cards-container z-[2] flex flex-col justify-center items-start w-[80%] lg:max-w-[70%]">
        {/* Show cards with data from the CardData file */}
        {RoadmapData.map((card, i) => {
          return (
            <div
              key={card.id}
              className={`flex justify-center ${
                i % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              } w-full`}
            >
              <Card data={card} roadmapCard={true} className="self-end" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Roadmap;
