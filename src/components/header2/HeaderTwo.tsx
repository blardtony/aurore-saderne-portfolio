import useScrolling from "../../hooks/useScrolling";
import { cn } from "../../libs/utils";
import AnchorButton from "../common/Button/AnchorButton";
import HeaderMenu2 from "./HeaderMenu2";
import HeaderMenuMobile from "./HeaderMenuMobile";

const HeaderTwo = () => {
  const isScrolling = useScrolling();
  return (
    <header
      className={cn(
        "sticky top-0 z-10 bg-background px-6 py-2 transition-shadow duration-300 ease-in-out",
        isScrolling && "shadow-md",
      )}
    >
      <nav className="flex items-center justify-between">
        <div className="font-playwrite text-xl font-bold">Aurore Saderne</div>
        <HeaderMenu2 />
        <AnchorButton className="hidden lg:block">Contactez-moi</AnchorButton>
        <HeaderMenuMobile />
      </nav>
    </header>
  );
};

export default HeaderTwo;
