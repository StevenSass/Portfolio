import "./Error.scss";

import { Link } from "react-router-dom";

function Error() {
  return (
    <main className="error">
      <h2 className="error__title">Erreur 404</h2>
      <p className="error__text">
        Désolé, la page que vous recherchez est introuvable.
      </p>
      <p className="error__text-link">
        Vous pouvez retourner à la <Link to="/Portfolio/">page d'accueil</Link>.
      </p>
    </main>
  );
}

export default Error;
