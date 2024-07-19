import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center px-4 py-2 justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-green-200 text-white hover:bg-green-100 ",
        outline:
          "bg-transparent text-green-200 border border-green-200 hover:bg-green-200 hover:text-white",
      },
      size: {
        default: "h-10",
        small: "h-8",
        large: "h-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export default buttonVariants;
