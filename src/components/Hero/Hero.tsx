import Title from "../common/Title";
import hero from "../../assets/hero.png";
import Section from "../common/Section";
import Button from "../common/Button";
import cv from "../../../public/cv.pdf";

const Hero = () => {
  return (
    <Section>
      <div className="grid place-items-center items-center gap-8 lg:grid-cols-2">
        <div>
          <Title>
            Aurore Saderne
            <span className="text-black mt-2 block text-3xl">Graphiste</span>
          </Title>
          <p className="mb-2">
            Je suis une étudiante en direction artistique digitale.
          </p>
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
