const Footer = () => {
  const year: number = new Date().getFullYear();
  return (
    <footer className="container mx-auto px-6 py-8">
      <div className="grid w-full justify-between gap-8 md:grid-flow-col md:gap-0">
        <div className="font-playwrite text-xl font-bold">Aurore Saderne</div>
        <div>
          <h2 className="text-xl font-bold">Restons en contact</h2>
          <ul className="mt-2 pl-4">
            <li className="py-2">
              <a
                href="tel:+33766539189"
                className="text-black transition-colors ease-in-out hover:text-green-200"
              >
                07 66 53 91 89
              </a>
            </li>
            <li className="py-2">
              <a
                href="mailto:saderneaurore151@gmail.com"
                className="text-black transition-colors ease-in-out hover:text-green-200"
              >
                saderneaurore151@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold">Liens</h2>
          <ul className="mt-2 pl-4">
            <li className="py-2">
              <a
                href={"/#hero"}
                className={
                  "text-black transition-colors duration-300 ease-in-out hover:text-green-200"
                }
              >
                Accueil
              </a>
            </li>
            <li className="py-2">
              <a
                href={"/#work"}
                className={
                  "text-black transition-colors duration-300 ease-in-out hover:text-green-200"
                }
              >
                Expériences
              </a>
            </li>
            <li className="py-2">
              <a
                href={"/#school"}
                className={
                  "text-black transition-colors duration-300 ease-in-out hover:text-green-200"
                }
              >
                Parcours scolaire
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="py-4 text-center text-sm text-gray-700">
        &copy; {year} Tony BLARD. Tous droits réservés.
      </p>
    </footer>
  );
};
export default Footer;
