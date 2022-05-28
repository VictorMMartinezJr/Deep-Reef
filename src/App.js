import "./App.css";
import Hero from "./components/Hero/Hero.js";
import HowItWorks from "./components/HowItWorks";
import HowToBuy from "./components/HowToBuy";
import Roadmap from "./components/Roadmap";

function App() {
  return (
    <div className="App">
      <Hero />
      <HowItWorks />
      <Roadmap />
      <HowToBuy />
    </div>
  );
}

export default App;
