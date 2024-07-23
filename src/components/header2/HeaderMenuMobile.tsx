import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useState } from "react";
import HeaderMenuItem from "../header/HeaderMenuItem";

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

const HeaderMenuMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <>
      <Bars3BottomLeftIcon
        onClick={toggleMenu}
        className={"h-full max-h-8 cursor-pointer lg:hidden"}
      />
      <motion.ul
        initial={{ x: "-100%" }}
        variants={{
          visible: { x: 0 },
          hidden: { x: "-100%" },
        }}
        animate={isOpen ? "visible" : "hidden"}
        transition={{ duration: 0.2, ease: "easeIn" }}
        className={
          "fixed left-0 top-0 z-20 grid h-full w-full transform content-center bg-background bg-opacity-95 text-center text-black lg:hidden lg:w-80"
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
    </>
  );
};

export default HeaderMenuMobile;
