import { cva } from "class-variance-authority";

const titleVariants = cva("mb-6 font-bold uppercase text-green-200", {
  variants: {
    size: {
      default: "text-3xl lg:text-4xl",
      large: "text-4xl lg:text-5xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export default titleVariants;
