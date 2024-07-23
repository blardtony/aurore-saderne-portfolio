import useActiveAnchorLink from "../../hooks/useActiveAnchorLink";
import { cn } from "../../libs/utils";

const HeaderMenu2 = () => {
  const activeSection: string = useActiveAnchorLink();
  return (
    <ul className="hidden gap-8 text-sm uppercase lg:flex">
      <li>
        <a
          href={"/#hero"}
          className={cn(
            "text-black transition-colors duration-300 ease-in-out",
            activeSection === "hero" && "font-bold text-green-200",
          )}
        >
          Accueil
        </a>
      </li>
      <li>
        <a
          href={"/#work"}
          className={cn(
            "text-black transition-colors duration-300 ease-in-out",
            activeSection === "work" && "font-bold text-green-200",
          )}
        >
          Expériences
        </a>
      </li>
      <li>
        <a
          href={"/#school"}
          className={cn(
            "text-black transition-colors duration-300 ease-in-out",
            activeSection === "school" && "font-bold text-green-200",
          )}
        >
          Parcours scolaire
        </a>
      </li>
    </ul>
  );
};

export default HeaderMenu2;
