type TitleProps = {
  big?: boolean;
  children: React.ReactNode;
};
const Title = ({ children, big }: TitleProps) => {
  if (big) {
    return (
      <h1 className="mb-6 text-4xl font-bold uppercase text-green-200 lg:text-5xl">
        {children}
      </h1>
    );
  }
  return (
    <h1 className="mb-6 text-3xl font-bold uppercase text-green-200 lg:text-4xl">
      {children}
    </h1>
  );
};

export default Title;
