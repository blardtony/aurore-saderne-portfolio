import { PropsWithChildren } from "react";

const Title = ({ children }: PropsWithChildren) => {
  return (
    <h1 className="text-green-200 mb-6 text-5xl font-bold uppercase">
      {children}
    </h1>
  );
};

export default Title;
