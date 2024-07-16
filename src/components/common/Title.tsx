import { PropsWithChildren } from "react";

const Title = ({ children }: PropsWithChildren) => {
  return (
    <h1 className="text-3xl font-bold uppercase text-green">{children}</h1>
  );
};

export default Title;
