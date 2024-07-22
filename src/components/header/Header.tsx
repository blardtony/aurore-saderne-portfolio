import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { motion } from "framer-motion";
import AnchorButton from "../common/Button/AnchorButton";

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
        "sticky top-0 z-10 flex h-16 w-full items-center justify-between bg-background px-6 py-2 transition-shadow ease-in-out " +
        (isScrolling ? "shadow-md" : " shadow-none")
      }
    >
      <div className="flex h-full items-center gap-8">
        <Bars3BottomLeftIcon
          className={"h-8 cursor-pointer"}
          onClick={() => toggleMenu()}
        />
        <a
          className="hidden text-xl font-bold hover:text-green-200 sm:block"
          href={"/#hero"}
        >
          Aurore Saderne
        </a>
      </div>
      <AnchorButton href={"/#contact"}>Contactez-moi</AnchorButton>
      <motion.ul
        initial={{ x: "-100%" }}
        variants={{
          visible: { x: 0 },
          hidden: { x: "-100%" },
        }}
        animate={isOpen ? "visible" : "hidden"}
        transition={{ duration: 0.2, ease: "easeIn" }}
        className={
          "fixed left-0 top-0 z-20 grid h-full w-full transform content-center bg-black text-center text-white lg:w-80"
        }
      >
        <XMarkIcon
          className={"absolute left-6 top-4 h-8 max-h-10 cursor-pointer"}
          onClick={() => toggleMenu()}
        />
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
      </motion.ul>
    </nav>
  );
};

export default Header;
