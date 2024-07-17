type SectionProps = {
  id: string;
  children: React.ReactNode;
};

const Section = ({ children, id }: SectionProps) => {
  return (
    <section id={id} className="min-h-dvh content-center px-6 py-4">
      {children}
    </section>
  );
};

export default Section;
