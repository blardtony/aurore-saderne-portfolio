import Contact from "../components/contact/Contact";
import SchoolExperience from "../components/experience/SchoolExperience";
import WorkExperience from "../components/experience/WorkExperience";
import Hero from "../components/hero/Hero";
import Project from "../components/project/Project";

function Index() {
  return (
    <>
      <Hero />
      <WorkExperience />
      <SchoolExperience />
      <Project />
      <Contact />
    </>
  );
}

export default Index;
