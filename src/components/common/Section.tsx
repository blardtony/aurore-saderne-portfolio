type SectionProps = {
  id: string;
  children: React.ReactNode;
};

const Section = ({ children, id }: SectionProps) => {
  return (
    <section id={id} className="mb-32 scroll-mt-32">
      {children}
    </section>
  );
};

export default Section;
