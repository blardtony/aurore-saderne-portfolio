import Section from "../common/Section";
import Title from "../common/Title";

const Experience = () => {
  return (
    <Section>
      <Title>Expérience</Title>
      <div className="grid gap-8">
        <div className="relative pl-20">
          <div className="absolute left-6 top-0 h-full w-2 bg-yellow"></div>
          <div className="absolute left-0 top-0 h-14 w-14 rounded-full bg-yellow p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-full w-full p-1"
            >
              <path
                fill-rule="evenodd"
                d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                clip-rule="evenodd"
              />
              <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
            </svg>
          </div>
          <div className="text-black mb-3 inline-block rounded-2xl bg-yellow px-4 py-1 font-bold">
            2023 - aujourd'hui
          </div>
          <h3 className="mb-1 text-2xl font-bold">Graphiste</h3>
          <div className="text-green-200 mb-4 text-2xl font-bold">
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
