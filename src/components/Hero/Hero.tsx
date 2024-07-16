import React from "react";
import Title from "../common/Title";
import hero from "../../assets/hero.png";

const Hero: React.FC = () => {
    return (
        <section>
            <div className="flex justify-center gap-20">
                <div className="content-center">
                    <Title>
                        Aurore Saderne
                        <span className="block text-6xl">portfolio</span>
                    </Title>
                </div>
                <div className="content-center">
                    <img className="max-h-[500px]" src={hero} alt="L'image représentative de la partie hero" />
                </div>
                
            </div>
        </section>
    );
};

export default Hero;