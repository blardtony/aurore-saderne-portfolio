import LinkButton from "../common/Button/LinkButton";

const ErrorPageNotFound = () => {
  return (
    <div className="container mx-auto grid h-dvh place-content-center px-6 py-2">
      <div className="text-center">
        <h1 className="mb-4 font-playwrite text-8xl font-bold text-green-200">
          404
        </h1>
        <p className="mb-4 text-2xl">
          La page que vous recherchez semble introuvable !
        </p>
        <p className="mb-6 text-base">
          Retournez à l'accueil pour trouver ce que vous cherchez.
        </p>
        <LinkButton to="/">Retour à l'accueil</LinkButton>
      </div>
    </div>
  );
};

export default ErrorPageNotFound;
