import { useState } from "react";
import AnchorButton from "../common/Button/AnchorButton";
import HeaderMenu from "./HeaderMenu";
import { cn } from "../../libs/utils";
import HeaderBrand from "./HeaderBrand";

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
      className={cn(
        "sticky top-0 z-10 flex h-16 w-full items-center justify-between bg-background px-6 py-2 transition-shadow duration-300 ease-in-out",
        isScrolling ? "shadow-md" : "shadow-none",
      )}
    >
      <HeaderBrand toggleMenu={toggleMenu} />
      <AnchorButton href={"/#contact"}>Contactez-moi</AnchorButton>
      <HeaderMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Header;
