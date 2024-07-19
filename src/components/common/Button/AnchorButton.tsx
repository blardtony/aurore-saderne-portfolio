import { AnchorHTMLAttributes } from "react";
import Button from "./Button";
import { VariantProps } from "class-variance-authority";
import buttonVariants from "./buttonVariants";

type AnchorButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants>;

const AnchorButton = ({
  children,
  variant,
  size,
  ...props
}: AnchorButtonProps) => {
  return (
    <a {...props}>
      <Button variant={variant} size={size}>
        {children}
      </Button>
    </a>
  );
};

export default AnchorButton;
