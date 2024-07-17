import Title from "../common/Title";
import hero from "../../assets/hero.png";
import Section from "../common/Section";
import Button from "../common/Button";
import cv from "../../../public/cv.pdf";

const Hero = () => {
  return (
    <Section id={"hero"}>
      <div className="grid place-items-center items-center gap-8 lg:grid-cols-2">
        <div>
          <Title>Aurore Saderne</Title>
          <div className="my-2 text-3xl font-bold text-black">Graphiste</div>
          <p className="mb-2">
            Je suis une étudiante qui râle tout le temps et qui est jamais
            contente.
          </p>
          <p className="mb-2">J'aime me plaindre</p>
          <Button url={cv}>Télécharger mon CV</Button>
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
