import "./App.css";
import Experience from "./components/experience/Experience";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div className="bg-background">
      <div className="container mx-auto">
        <Hero />
        <Experience />
      </div>
    </div>
  );
}

export default App;
