import { Bars3BottomLeftIcon } from "@heroicons/react/24/solid";
type HeaderBrandProps = {
  toggleMenu: () => void;
};

const HeaderBrand = ({ toggleMenu }: HeaderBrandProps) => {
  return (
    <div className="flex h-full items-center gap-8">
      <Bars3BottomLeftIcon
        className={"h-full max-h-8 cursor-pointer"}
        onClick={() => toggleMenu()}
      />
      <a
        className="hidden text-xl font-bold hover:text-green-200 sm:block"
        href={"/#hero"}
      >
        Aurore Saderne
      </a>
    </div>
  );
};
export default HeaderBrand;
