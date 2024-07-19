import { HTMLAttributes } from "react";
import titleVariants from "./titleVariant";
import { VariantProps } from "class-variance-authority";
import { cn } from "../../../libs/utils";

type TitleProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof titleVariants>;

const Title = ({ children, size, className, ...props }: TitleProps) => {
  return (
    <div {...props} className={cn(titleVariants({ size }), className)}>
      {children}
    </div>
  );
};

export default Title;
