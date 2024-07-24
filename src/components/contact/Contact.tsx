import Section from "../common/Section/Section";
import Title from "../common/Title/Title";
import contact from "../../assets/contact.png";
import { DevicePhoneMobileIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

const Contact = () => {
  return (
    <Section id={"contact"}>
      <div className="lg:grid lg:grid-cols-2 lg:place-items-center lg:items-center lg:gap-8">
        <img
          className="hidden max-h-[500px] lg:block"
          src={contact}
          alt="L'image représentative de la partie contact"
        />
        <div>
          <Title size={"large"}>Contactez-moi</Title>
          <div className="mb-4 flex items-center space-x-2 text-xl">
            <DevicePhoneMobileIcon className="inline-block h-8 w-8" />
            <a
              href="tel:+33766539189"
              className="text-black transition-colors ease-in-out hover:text-green-200"
            >
              07 66 53 91 89
            </a>
          </div>
          <div className="flex items-center space-x-2 text-xl">
            <EnvelopeIcon className="inline-block h-8 w-8" />
            <a
              href="mailto:saderneaurore151@gmail.com"
              className="text-black transition-colors ease-in-out hover:text-green-200"
            >
              saderneaurore151@gmail.com
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
