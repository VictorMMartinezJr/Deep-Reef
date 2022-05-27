import "./App.css";
import Hero from "./components/Hero/Hero.js";
import HowItWorks from "./components/HowItWorks";
import Roadmap from "./components/Roadmap";

function App() {
  return (
    <div className="App">
      <Hero />
      <HowItWorks />
      <Roadmap />
    </div>
  );
}

export default App;
