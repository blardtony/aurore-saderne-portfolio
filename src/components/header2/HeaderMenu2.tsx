import useActiveAnchorLink from "../../hooks/useActiveAnchorLink";
import HeaderItemMenu from "./HeaderItemMenu";
type HeaderItem = {
  href: string;
  text: string;
  id: string;
};
const headerItems: HeaderItem[] = [
  { href: "/#hero", text: "Accueil", id: "hero" },
  { href: "/#work", text: "Expériences", id: "work" },
  { href: "/#school", text: "Parcours scolaire", id: "school" },
  { href: "/#projects", text: "Mes projets", id: "projects" },
];
const HeaderMenu2 = () => {
  const activeSection: string = useActiveAnchorLink();
  return (
    <ul className="hidden gap-8 text-sm uppercase lg:flex">
      {headerItems.map((item, index) => (
        <HeaderItemMenu key={index} item={item} activeSection={activeSection} />
      ))}
    </ul>
  );
};

export default HeaderMenu2;
