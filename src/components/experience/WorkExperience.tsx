import ExperienceItem from "../common/ExperienceItem";
import Section from "../common/Section";
import Title from "../common/Title";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
type Experience = {
  date: string;
  title: string;
  location: string;
  description: string;
};
const experiences: Experience[] = [
  {
    date: "2023 - aujourd'hui",
    title: "Graphiste",
    location: "Paris / Montpellier",
    description: "Graphiste bénévole pour des associations",
  },
];
const WorkExperience = () => {
  return (
    <Section>
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
