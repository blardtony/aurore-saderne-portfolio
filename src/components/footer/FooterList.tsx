type FooterListProps = {
  title: string;
  list: { href: string; text: string }[];
};
const FooterList = ({ title, list }: FooterListProps) => {
  return (
    <div>
      <h2 className="text-xl font-bold">{title}</h2>
      <ul className="mt-2 pl-4">
        {list.map((item, index) => (
          <li key={index} className="py-2">
            <a
              href={item.href}
              className="text-black transition-colors ease-in-out hover:text-green-200"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
