import { PencilIcon } from "@heroicons/react/24/solid";
import LinkButton from "../common/Button/LinkButton";
import Section from "../common/Section/Section";
import Title from "../common/Title/Title";
import hero from "../../assets/hero.png";
const Project = () => {
  return (
    <Section id={"projects"}>
      <div className="mb-8 md:flex md:justify-between">
        <Title>Mes projets récents</Title>
        <LinkButton to={"/projects"}>Voir tous mes projets</LinkButton>
      </div>
      <div className="grid justify-items-center gap-4 lg:grid-cols-2 xl:grid-cols-3">
        <div className="w-full max-w-96 rounded-lg bg-green-200 px-8 py-6">
          {/* category and icon */}
          <div className="mb-6 flex items-center justify-between">
            <div className="font-bold uppercase text-white">
              Character design
            </div>
            <div className="rounded-lg border-2 border-white/60 p-2 text-white">
              <PencilIcon className="h-6 w-6" />
            </div>
          </div>
          {/* Image */}
          <div className="mb-4 rounded-md bg-white p-4">
            <img
              src={hero}
              alt="project"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
          {/* Title description link */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-white">
              Mon super projet
            </h3>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing{" "}
            </p>
          </div>
        </div>
        <div className="w-full max-w-96 rounded-lg bg-green-200 px-8 py-6">
          {/* category and icon */}
          <div className="mb-6 flex items-center justify-between">
            <div className="font-bold uppercase text-white">
              Character design
            </div>
            <div className="rounded-lg border-2 border-white/60 p-2 text-white">
              <PencilIcon className="h-6 w-6" />
            </div>
          </div>
          {/* Image */}
          <div className="mb-4 rounded-md bg-white p-4">
            <img
              src={hero}
              alt="project"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
          {/* Title description link */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-white">
              Mon super projet
            </h3>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing{" "}
            </p>
          </div>
        </div>
        <div className="w-full max-w-96 rounded-lg bg-green-200 px-8 py-6">
          {/* category and icon */}
          <div className="mb-6 flex items-center justify-between">
            <div className="font-bold uppercase text-white">
              Character design
            </div>
            <div className="rounded-lg border-2 border-white/60 p-2 text-white">
              <PencilIcon className="h-6 w-6" />
            </div>
          </div>
          {/* Image */}
          <div className="mb-4 rounded-md bg-white p-4">
            <img
              src={hero}
              alt="project"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
          {/* Title description link */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-white">
              Mon super projet
            </h3>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing{" "}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Project;
