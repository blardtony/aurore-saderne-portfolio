import Title from "../common/Title";
import hero from "../../assets/hero.png";
import Section from "../common/Section";

const Hero = () => {
  return (
    <Section>
      <div className="grid place-items-center items-center gap-8 lg:grid-cols-2">
        <div>
          <Title>
            Aurore Saderne
            <span className="block text-6xl">portfolio</span>
          </Title>
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
