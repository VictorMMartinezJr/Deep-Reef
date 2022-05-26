import Card from "./Card";
import { HowItWorksData } from "./CardData";

const HowItWorks = () => {
  return (
    <section className="min-h-[70vh] flex flex-col items-center text-white bg-gradient-to-b from-[#000] to-[#061d37] relative blur-before">
      <div className="overlay"></div> {/* Used to darken gradient background*/}
      <h2 className="z-[2] text-4xl my-20">HOW IT WORKS?</h2>
      <div className="cards-container z-[2] flex flex-col justify-center items-center md:flex-row md:flex-wrap">
        {/* Show cards with data from the CardData file */}
        {HowItWorksData.map((card) => {
          return <Card key={card.id} data={card} />;
        })}
      </div>
    </section>
  );
};

export default HowItWorks;
