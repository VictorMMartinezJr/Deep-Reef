import Card from "../Card.js";
import { HowItWorksData } from "./CardData";

const HowItWorks = () => {
  return (
    <section
      className="min-h-[70vh] flex flex-col items-center text-white bg-gradient-to-b from-[#000] to-[#061d37] relative blur-before"
      id="howitworks"
    >
      <div className="overlay"></div> {/* Used to darken gradient background*/}
      <h2 className="z-[2] text-2xl mt-20 mb-8 font-bold sm:text-3xl">
        HOW IT WORKS?
      </h2>
      <div className="cards-container z-[2] flex flex-col justify-center items-center md:flex-row md:flex-wrap w-[80%]">
        {/* Show cards with data from the CardData file */}
        {HowItWorksData.map((card) => {
          return <Card key={card.id} data={card} />;
        })}
      </div>
    </section>
  );
};

export default HowItWorks;
