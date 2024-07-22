import { XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import HeaderMenuItem from "./HeaderMenuItem";

type HeaderMenuProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};
type HeaderItem = {
  href: string;
  text: string;
};
const headerItems: HeaderItem[] = [
  { href: "/#hero", text: "Accueil" },
  { href: "/#work", text: "Expériences" },
  { href: "/#school", text: "Parcours scolaire" },
  { href: "/#contact", text: "Contactez-moi" },
];
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
      {headerItems.map((item, index) => (
        <HeaderMenuItem key={index} href={item.href} toggleMenu={toggleMenu}>
          {item.text}
        </HeaderMenuItem>
      ))}
    </motion.ul>
  );
};

export default HeaderMenu;
