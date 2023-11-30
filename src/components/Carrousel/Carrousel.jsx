import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import data from "../../data/skill.json";
import { useState } from "react";

function Carrousel() {
  const [count, setCount] = useState(0);

  const handleCountChange = (newCount) => {
    if (newCount < 0) {
      setCount(data.length - 1);
    } else if (newCount >= data.length) {
      setCount(0);
    } else {
      setCount(newCount);
    }
  };

  const handlePrevClick = () => {
    handleCountChange(count - 1);
  };

  const handleNextClick = () => {
    handleCountChange(count + 1);
  };

  return (
    <div className="container">
      <div className="dots">
        <p>
          {count} / {data.length - 1}
        </p>
      </div>
      <div className="arrow-left">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="Carrousel__content__chevronLeft"
          onClick={handlePrevClick}
        />
      </div>
      <div className="arrow-right">
        <FontAwesomeIcon
          icon={faChevronRight}
          className="Carrousel__content__chevronRight"
          onClick={handleNextClick}
        />
      </div>
      <div className="comp">
        <h2 className="Carrousel__header__comp">Compétences</h2>
      </div>
      <div className="langage">
        <h3 className="Carrousel__header__langage">{data[count].langage}</h3>
      </div>
      <div className="logo">
        <img
          src={data[count].logo}
          alt=""
          className="Carrousel__content__logo"
        />
      </div>
      <div className="text">
        <ul className="Carrousel__content__text">
          {data[count].description.map((x) => (
            <li key={data.length + Math.random()}>{x}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Carrousel;
