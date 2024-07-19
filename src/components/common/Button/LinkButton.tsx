import Button from "./Button";
import { VariantProps } from "class-variance-authority";
import buttonVariants from "./buttonVariants";
import { Link, LinkProps } from "react-router-dom";

type LinkButtonProps = LinkProps & VariantProps<typeof buttonVariants>;

const LinkButton = ({ children, variant, size, ...props }: LinkButtonProps) => {
  return (
    <Link {...props}>
      <Button variant={variant} size={size}>
        {children}
      </Button>
    </Link>
  );
};

export default LinkButton;
