import "./Parcours.scss";

import React, { useState } from "react";
import data from "../../data/parcours.json";
import { motion } from "framer-motion";

function Parcours() {
  const [slide, setSlide] = useState(0);
  const [toggleAnimation, setToggleAnimation] = useState(false);

  const handleClick = (number) => {
    setSlide(number);
    handleToggleAnimation();
  };

  const timelineDots = data.map((item, index) => (
    <React.Fragment key={index}>
      <div
        className={`parcours__timeline__dot ${
          slide === index ? "selected" : ""
        }`}
        data-number={index}
        onClick={() => handleClick(index)}></div>
      {index !== data.length - 1 && (
        <div className="parcours__timeline__bar"></div>
      )}
    </React.Fragment>
  ));

  const handleToggleAnimation = () => {
    setToggleAnimation((prev) => !prev);
  };

  return (
    <section className="parcours">
      <h2>Parcours</h2>
      <div className="parcours__timeline">{timelineDots}</div>
      <motion.div
        className="parcours__content"
        key={toggleAnimation ? "0" : "1"}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <div className="parcours__content__header">
          <div className="parcours__content__header__title">
            <h2>{data[slide].title}</h2>
            <h3>{data[slide].subTitle}</h3>
          </div>
          <p>{data[slide].date}</p>
        </div>
        <p className="parcours__content__text">{data[slide].text}</p>
      </motion.div>
    </section>
  );
}

export default Parcours;
