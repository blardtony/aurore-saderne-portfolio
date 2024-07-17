import ExperienceItem from "../common/ExperienceItem";
import Section from "../common/Section";
import Title from "../common/Title";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
type Experience = {
  date: string;
  title: string;
  location: string;
  description: string;
};
const experiences: Experience[] = [
  {
    date: "2024 - 2026",
    title: "Bachelor Game Design & Jeux Vidéo",
    location: "MyDigitalSchool Montpellier",
    description:
      "Cette formation complète en direction artistique en formant à tous les outils nécessaires à la création numérique, en design web, mais aussi et surtout en management afin d'être capable de gérer une équipe.",
  },
  {
    date: "2020 - 2023",
    title: "Bachelor Game Design & Jeux Vidéo",
    location: "E-artsup Paris",
    description:
      "Le premier cycle s'organise autour de nombreux projets faisant travailler en équipe les étudiants ayant choisis au cours de la première année de se spécialiser en Game Art",
  },
];
const SchoolExperience = () => {
  return (
    <Section>
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
