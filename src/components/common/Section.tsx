import { PropsWithChildren } from "react";

const Section = ({ children }: PropsWithChildren) => {
  return <section className="px-6 py-4">{children}</section>;
};

export default Section;
