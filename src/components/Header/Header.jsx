import "./Header.scss";

import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Header() {
  const setDarkMode = () => {
    document.querySelector("html").setAttribute("theme", "dark");
    localStorage.setItem("selected-theme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("html").setAttribute("theme", "light");
    localStorage.setItem("selected-theme", "light");
  };

  const selectedTheme = localStorage.getItem("selected-theme");

  if (selectedTheme === "light") {
    setLightMode();
  } else if (selectedTheme === "dark") {
    setDarkMode();
  }

  return (
    <div className="header">
      <Link to="/Portfolio/" className="header__link">
        <h1 className="header__link__title">Portfolio</h1>
      </Link>
      <div className="dropdown">
        <div className="dropdown__section">
          <button className="dropdown__section__button">Thèmes</button>
          <FontAwesomeIcon icon={faCaretDown} />
          <div className="dropdown__section__content">
            <p onClick={setLightMode}>Claire</p>
            <p onClick={setDarkMode}>Sombre</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
