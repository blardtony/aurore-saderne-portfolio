import "./App.css";
import SchoolExperience from "./components/experience/SchoolExperience";
import WorkExperience from "./components/experience/WorkExperience";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div className="bg-background">
      <div className="container mx-auto">
        <Hero />
        <WorkExperience />
        <SchoolExperience />
      </div>
    </div>
  );
}

export default App;
