import { PropsWithChildren } from "react";

const Button = ({ children, url }: PropsWithChildren<{ url: string }>) => {
  return (
    <a
      href={url}
      className="focus-visible:ring-ring inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-green-200 px-4 py-2 font-medium text-white ring-offset-background transition-colors duration-300 ease-in-out hover:bg-green-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-200 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    >
      {children}
    </a>
  );
};

export default Button;
