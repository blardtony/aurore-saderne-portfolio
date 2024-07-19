import Title from "../common/Title/Title";
import hero from "../../assets/hero.png";
import Section from "../common/Section";
import cv from "/cv.pdf";
import AnchorButton from "../common/Button/AnchorButton";

const Hero = () => {
  return (
    <Section id={"hero"}>
      <div className="grid place-items-center items-center gap-8 lg:grid-cols-2">
        <div>
          <Title size={"large"}>Aurore Saderne</Title>
          <div className="my-2 text-2xl font-bold text-black md:text-3xl">
            Graphiste
          </div>
          <div className="mb-4">
            <p>
              Je suis une étudiante qui râle tout le temps et qui est jamais
              contente.
            </p>
            <p>J'aime me plaindre</p>
          </div>
          <AnchorButton target="_blank" href={cv}>
            Télécharger mon CV
          </AnchorButton>
        </div>
        <img
          className="max-h-[500px]"
          src={hero}
          alt="L'image représentative de la partie hero"
        />
      </div>
    </Section>
  );
};

export default Hero;
