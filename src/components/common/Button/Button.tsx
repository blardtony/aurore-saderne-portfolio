import { VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import buttonVariants from "./buttonVariants";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="focus-visible:ring-ring inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-green-200 px-4 py-2 font-medium text-white ring-offset-background transition-colors duration-300 ease-in-out hover:bg-green-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-200 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
      {children}
    </button>
  );
};

export default Button;
