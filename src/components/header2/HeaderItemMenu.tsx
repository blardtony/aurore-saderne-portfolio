import { cn } from "../../libs/utils";
type HeaderItem = {
  href: string;
  text: string;
  id: string;
};
type HeaderItemMenuProps = {
  item: HeaderItem;
  activeSection: string;
};
const HeaderItemMenu = ({ item, activeSection }: HeaderItemMenuProps) => {
  return (
    <>
      <li>
        <a
          href={item.href}
          className={cn(
            "text-black transition-colors duration-300 ease-in-out hover:text-green-200",
            activeSection === item.id && "font-bold text-green-200",
          )}
        >
          {item.text}
        </a>
      </li>
    </>
  );
};

export default HeaderItemMenu;
