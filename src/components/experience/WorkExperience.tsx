import ExperienceItem from "../common/ExperienceItem";
import Section from "../common/Section";
import Title from "../common/Title/Title";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
type Experience = {
  date: string;
  title: string;
  location: string;
  descriptions: string[];
};
const experiences: Experience[] = [
  {
    date: "2023 - aujourd'hui",
    title: "Graphiste",
    location: "Freelance - Paris / Montpellier",
    descriptions: [
      "Logo pour l'asscoiation des étudiants de l'école",
      "Logo pour un groupe de reprise de chansons françaises",
      "Logo et posters pour une association d'événementiel",
    ],
  },
];
const WorkExperience = () => {
  return (
    <Section id={"work"}>
      <Title>Expérience</Title>
      <div className="grid">
        {experiences.map((experience, index) => (
          <ExperienceItem
            key={index}
            experience={experience}
            icon={<BriefcaseIcon className="h-full w-full p-1 text-black" />}
          />
        ))}
      </div>
    </Section>
  );
};

export default WorkExperience;
