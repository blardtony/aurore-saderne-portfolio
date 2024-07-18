import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    <nav
      className={
        "sticky top-0 z-10 flex h-16 w-full items-center justify-between bg-background px-6 py-2 transition-shadow ease-in-out lg:h-20 " +
        (isScrolling ? "shadow-md" : " shadow-none")
      }
    >
      <Link className="text-xl font-bold" to={"/"}>
        Aurore Saderne
      </Link>
      {isOpen ? (
        <XMarkIcon
          className="z-30 h-full max-h-10 cursor-pointer text-white"
          onClick={() => toggleMenu()}
        />
      ) : (
        <Bars3BottomLeftIcon
          className="z-30 h-full max-h-10 cursor-pointer"
          onClick={() => toggleMenu()}
        />
      )}
      <ul
        className={
          "fixed top-0 z-20 h-full w-full content-center bg-black text-center text-white transition-all duration-200 ease-in-out lg:w-80 lg:duration-500 " +
          (isOpen ? "right-0" : "-right-full")
        }
      >
        <li className="upppercase py-6 text-2xl font-bold">
          <a href={"/#hero"} onClick={toggleMenu}>
            Accueil
          </a>
        </li>
        <li className="upppercase py-6 text-2xl font-bold">
          <a href={"/#work"} onClick={toggleMenu}>
            Expériences
          </a>
        </li>
        <li className="upppercase py-6 text-2xl font-bold">
          <a href={"/#school"} onClick={toggleMenu}>
            Parcours scolaire
          </a>
        </li>
        <li className="upppercase py-6 text-2xl font-bold">
          <a href={"/#contact"} onClick={toggleMenu}>
            Contactez-moi
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
