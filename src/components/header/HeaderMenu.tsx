import { XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

type HeaderMenuProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};
const HeaderMenu = ({ isOpen, toggleMenu }: HeaderMenuProps) => {
  return (
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
  );
};

export default HeaderMenu;
