import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import hero from "../../assets/hero.png";
import { useState } from "react";

const Header = () => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  const handleScroll = () => {
    if (window.scrollY > 80) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };
  window.addEventListener("scroll", handleScroll);
  return (
    <div>
      <nav
        className={
          "fixed left-0 top-0 z-10 flex w-full items-center justify-between bg-background px-6 py-2 transition-all duration-300 ease-in-out " +
          (isScrolling ? "h-24 shadow-md" : "h-28 shadow-none")
        }
      >
        <a className="h-full">
          <img className="h-full" src={hero} />
        </a>
        {isOpen ? (
          <XMarkIcon
            className="z-30 h-10 cursor-pointer text-white"
            onClick={() => toggleMenu()}
          />
        ) : (
          <Bars3BottomLeftIcon
            className="z-30 h-10 cursor-pointer"
            onClick={() => toggleMenu()}
          />
        )}
        <ul
          className={
            "fixed right-0 top-0 z-20 h-full w-full content-center bg-black text-center text-white transition-all duration-500 ease-in-out md:w-80 " +
            (isOpen ? "rigth-0" : "-right-full")
          }
        >
          <li className="upppercase py-6 text-2xl font-bold">
            <a>Accueil</a>
          </li>
          <li className="upppercase py-6 text-2xl font-bold">
            <a>Expériences</a>
          </li>
          <li className="upppercase py-6 text-2xl font-bold">
            <a>Parcours</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
