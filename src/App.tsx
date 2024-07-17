import "./App.css";
import SchoolExperience from "./components/experience/SchoolExperience";
import WorkExperience from "./components/experience/WorkExperience";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div className="bg-background">
      <Header />
      <div className="container mx-auto">
        <Hero />
        <WorkExperience />
        <SchoolExperience />
      </div>
    </div>
  );
}

export default App;
