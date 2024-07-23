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
  className,
  ...props
}: AnchorButtonProps) => {
  return (
    <a {...props} className={className}>
      <Button variant={variant} size={size}>
        {children}
      </Button>
    </a>
  );
};

export default AnchorButton;
