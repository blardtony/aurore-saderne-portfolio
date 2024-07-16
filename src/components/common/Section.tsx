import { PropsWithChildren } from "react";

const Section = ({ children }: PropsWithChildren) => {
  return (
    <section className="min-h-dvh content-center px-6 py-4">{children}</section>
  );
};

export default Section;
