import React from "react";

type HeaderMenuItemProps = {
  href: string;
  toggleMenu: () => void;
  children: React.ReactNode;
};
const HeaderMenuItem = ({
  href,
  toggleMenu,
  children,
}: HeaderMenuItemProps) => {
  return (
    <li className="upppercase py-6 text-2xl font-bold">
      <a href={href} onClick={toggleMenu}>
        {children}
      </a>
    </li>
  );
};

export default HeaderMenuItem;
