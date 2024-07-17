type Experience = {
  date: string;
  title: string;
  location: string;
  descriptions: string[];
};
type ExperienceItemProps = {
  experience: Experience;
  icon: React.ReactNode;
};

const ExperienceItem = ({ experience, icon }: ExperienceItemProps) => {
  return (
    <div className="relative max-w-xl pl-20 pt-3">
      <div className="absolute left-6 top-0 h-full w-2 bg-yellow"></div>
      <div className="absolute left-0 top-0 h-14 w-14 rounded-full bg-yellow p-1">
        {icon}
      </div>
      <div className="mb-3 inline-block rounded-2xl bg-yellow px-4 py-1 font-bold text-black">
        {experience.date}
      </div>
      <h3 className="mb-1 text-2xl font-bold">{experience.title}</h3>
      <div className="mb-4 text-lg font-bold text-green-200">
        {experience.location}
      </div>
      <ul>
        {experience.descriptions.map((description, index) => (
          <li key={index} className="mb-4 pl-4 text-lg font-bold">
            {description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
