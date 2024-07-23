import { useState } from "react";
import AnchorButton from "../common/Button/AnchorButton";
import HeaderMenu from "./HeaderMenu";
import { cn } from "../../libs/utils";
import HeaderBrand from "./HeaderBrand";
import useScrolling from "../../hooks/useScrolling";

const Header = () => {
  const isScrolling = useScrolling();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };
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
