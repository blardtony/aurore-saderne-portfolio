import LinkButton from "../common/Button/LinkButton";

const ErrorPageNotFound = () => {
  return (
    <div className="container mx-auto grid h-dvh place-content-center px-6 py-2">
      <div className="text-center">
        <h1 className="mb-4 font-playwrite text-7xl font-bold text-green-200 md:text-8xl">
          404
        </h1>
        <p className="mb-4 text-lg md:text-2xl">
          La page que vous recherchez semble introuvable !
        </p>
        <p className="mb-6 text-sm md:text-base">
          Retournez à l'accueil pour trouver ce que vous cherchez.
        </p>
        <LinkButton to="/">Retour à l'accueil</LinkButton>
      </div>
    </div>
  );
};

export default ErrorPageNotFound;
