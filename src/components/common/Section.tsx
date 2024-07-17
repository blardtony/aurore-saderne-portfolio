type SectionProps = {
  id: string;
  children: React.ReactNode;
};

const Section = ({ children, id }: SectionProps) => {
  return (
    <section id={id} className="mt-4 pt-28">
      {children}
    </section>
  );
};

export default Section;
