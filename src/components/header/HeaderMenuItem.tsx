import React from "react";
import useActiveAnchorLink from "../../hooks/useActiveAnchorLink";
import { cn } from "../../libs/utils";

type HeaderMenuItemProps = {
  href: string;
  toggleMenu: () => void;
  children: React.ReactNode;
  id: string;
};
const HeaderMenuItem = ({
  href,
  toggleMenu,
  id,
  children,
}: HeaderMenuItemProps) => {
  const activeSection: string = useActiveAnchorLink();
  return (
    <li className="upppercase py-6 text-2xl">
      <a
        className={cn(
          "font-bold transition-colors duration-300 ease-in-out",
          activeSection === id && "text-green-200",
        )}
        href={href}
        onClick={toggleMenu}
      >
        {children}
      </a>
    </li>
  );
};

export default HeaderMenuItem;
