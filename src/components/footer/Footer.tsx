import FooterList from "./FooterList";

const contactList = [
  {
    href: "tel:+33766539189",
    text: "07 66 53 91 89",
  },
  {
    href: "mailto:saderneaurore151@gmail.com",
    text: "saderneaurore151@gmail.com",
  },
];

const linkList = [
  {
    href: "/#hero",
    text: "Accueil",
  },
  {
    href: "/#work",
    text: "Expériences",
  },
  {
    href: "/#school",
    text: "Parcours scolaire",
  },
];

const Footer = () => {
  const year: number = new Date().getFullYear();
  return (
    <footer className="container mx-auto px-6 py-8">
      <div className="grid w-full justify-between gap-8 md:grid-flow-col md:gap-0">
        <div className="font-playwrite text-xl font-bold">Aurore Saderne</div>
        <FooterList title="Restons en contact" list={contactList} />
        <FooterList title="Navigation" list={linkList} />
      </div>
      <p className="py-4 text-center text-sm text-gray-700">
        &copy; {year} Tony BLARD. Tous droits réservés.
      </p>
    </footer>
  );
};
export default Footer;
