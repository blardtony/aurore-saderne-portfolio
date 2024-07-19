import { VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import buttonVariants from "./buttonVariants";
import { cn } from "../../../libs/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = ({
  children,
  size,
  variant,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {children}
    </button>
  );
};

export default Button;
