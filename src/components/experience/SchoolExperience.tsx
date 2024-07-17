import ExperienceItem from "../common/ExperienceItem";
import Section from "../common/Section";
import Title from "../common/Title";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
type Experience = {
  date: string;
  title: string;
  location: string;
  descriptions: string[];
};
const experiences: Experience[] = [
  {
    date: "2020 - 2023",
    title: "Bachelor Game Art & Jeux Vidéo",
    location: "E-artsup Paris",
    descriptions: ["TODO", "TODO", "TODO"],
  },
];
const SchoolExperience = () => {
  return (
    <Section id={"school"}>
      <Title>Parcours scolaire</Title>
      <div className="grid">
        {experiences.map((experience, index) => (
          <ExperienceItem
            key={index}
            experience={experience}
            icon={<AcademicCapIcon className="h-full w-full p-1 text-black" />}
          />
        ))}
      </div>
    </Section>
  );
};

export default SchoolExperience;
