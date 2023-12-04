import React, { useEffect, useState } from "react";
import {
  faChevronLeft,
  faChevronRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export default function Modal({ closeModal, data }) {
  const [isHovered, setIsHovered] = useState(false);
  const [toggleAnimation, setToggleAnimation] = useState(false);
  const [count, setCount] = useState(0);

  const handleCountChange = (newCount) => {
    if (newCount < 0) {
      setCount(data.pictures.length - 1);
    } else if (newCount >= data.pictures.length) {
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

  const dots = [];
  for (let i = 0; i < data.pictures.length; i++) {
    const isSelected = i === count ? "selected" : "";
    dots.push(
      <div key={i} className={`modal__carousel__dots__dot ${isSelected}`}></div>
    );
  }

  return (
    <>
      <div className="overlay" onClick={closeModal}></div>
      <motion.div
        className="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}>
        <div className="modal__close">
          <div className="modal__close__button" onClick={closeModal}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
        <div
          className="modal__carousel"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          <div className="modal__carousel__section">
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="modal__carousel__section__arrow-left"
              onClick={handlePrevClick}
            />
            <img
              src={data.pictures[count]}
              alt=""
              className="modal__carousel__section__img"
            />
            <FontAwesomeIcon
              icon={faChevronRight}
              className="modal__carousel__section__arrow-right"
              onClick={handleNextClick}
            />
          </div>
          <div className="modal__carousel__dots">{dots}</div>
        </div>
        <ul className="modal__tags">
          {data.langage.map((langage, index) => (
            <li key={index + langage}>{langage}</li>
          ))}
        </ul>
        <div className="modal__description">{data.description}</div>
      </motion.div>
    </>
  );
}
