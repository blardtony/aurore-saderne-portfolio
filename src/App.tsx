import "./App.css";
import Contact from "./components/contact/Contact";
import SchoolExperience from "./components/experience/SchoolExperience";
import WorkExperience from "./components/experience/WorkExperience";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-6">
        <Hero />
        <WorkExperience />
        <SchoolExperience />
        <Contact />
      </div>
    </>
  );
}

export default App;
