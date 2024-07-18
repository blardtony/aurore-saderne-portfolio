import Contact from "../components/contact/Contact";
import SchoolExperience from "../components/experience/SchoolExperience";
import WorkExperience from "../components/experience/WorkExperience";
import Hero from "../components/hero/Hero";

function Index() {
  return (
    <>
      <Hero />
      <WorkExperience />
      <SchoolExperience />
      <Contact />
    </>
  );
}

export default Index;
