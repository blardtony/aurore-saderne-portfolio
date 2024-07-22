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
    <li className="upppercase py-6 text-2xl">
      <a
        className="font-bold transition-colors ease-in-out hover:text-green-200"
        href={href}
        onClick={toggleMenu}
      >
        {children}
      </a>
    </li>
  );
};

export default HeaderMenuItem;
