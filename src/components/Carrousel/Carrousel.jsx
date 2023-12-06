import "./Carrousel.scss";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import data from "../../data/skill.json";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Carrousel() {
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [toggleAnimation, setToggleAnimation] = useState(false);

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
    handleToggleAnimation();
  };

  const handleNextClick = () => {
    handleCountChange(count + 1);
    handleToggleAnimation();
  };

  useEffect(() => {
    let intervalId;
    if (!isHovered) {
      intervalId = setInterval(() => {
        handleNextClick();
      }, 5000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [count, isHovered]);

  const handleToggleAnimation = () => {
    setToggleAnimation((prev) => !prev);
  };

  return (
    <div
      className="container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
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
        <motion.h2
          className="Carrousel__header__comp"
          key={toggleAnimation ? "0" : "1"}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}>
          Compétences
        </motion.h2>
      </div>
      <div className="langage">
        <motion.h3
          className="Carrousel__header__langage"
          key={toggleAnimation ? "0" : "1"}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          {data[count].langage}
        </motion.h3>
      </div>
      <div className="logo">
        <motion.img
          src={data[count].logo}
          alt="qzdqzd"
          className="Carrousel__content__logo"
          key={toggleAnimation ? "0" : "1"}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
      </div>
      <motion.div
        className="text"
        key={toggleAnimation ? "0" : "1"}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <ul className="Carrousel__content__text">
          {data[count].description.map((x) => (
            <li key={data.length + Math.random()}>{x}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default Carrousel;
