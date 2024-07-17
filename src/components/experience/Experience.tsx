import Section from "../common/Section";
import Title from "../common/Title";
import { BriefcaseIcon } from "@heroicons/react/24/solid";

const Experience = () => {
  return (
    <Section>
      <Title>Expérience</Title>
      <div className="grid gap-8">
        <div className="relative pl-20">
          <div className="absolute left-6 top-0 h-full w-2 bg-yellow"></div>
          <div className="absolute left-0 top-0 h-14 w-14 rounded-full bg-yellow p-1">
            <BriefcaseIcon className="h-full w-full p-1 text-black" />
          </div>
          <div className="mb-3 inline-block rounded-2xl bg-yellow px-4 py-1 font-bold text-black">
            2023 - aujourd'hui
          </div>
          <h3 className="mb-1 text-2xl font-bold">Graphiste</h3>
          <div className="mb-4 text-2xl font-bold text-green-200">
            Paris / Montpellier
          </div>
          <p className="mb-4">Graphiste bénévole pour des associations</p>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
/**
 *     background-color: var(--secondary-color);
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
 */
