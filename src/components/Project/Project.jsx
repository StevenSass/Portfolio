import "./Project.scss";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Card from "../Card/Card";
import projectData from "../../data/project.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlassMinus,
  faMagnifyingGlassPlus,
} from "@fortawesome/free-solid-svg-icons";

function Project() {
  const [toggleAnimation, setToggleAnimation] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = () => {
    setIsOpen(!isOpen);
  };

  const renderCards = (start, end) => {
    return projectData
      .slice(start, end)
      .map((item, index) => <Card key={index} id={item} />);
  };

  return (
    <section className="project">
      {!isOpen ? (
        <motion.div
          className="project__section"
          initial={toggleAnimation ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
          {renderCards(0, 3)}
        </motion.div>
      ) : (
        <div className="project__section">
          {renderCards(0, 3)}
          <motion.div
            className="project__section__plus"
            key={toggleAnimation ? "0" : "1"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}>
            {renderCards(0, 3)}
          </motion.div>
        </div>
      )}

      <div className="project__plus" onClick={handleChange}>
        {!isOpen ? (
          <div className="project__plus__text">
            <p>Affichez Plus </p>
            <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
          </div>
        ) : (
          <div className="project__plus__text">
            <p>Affichez Moins </p>
            <FontAwesomeIcon icon={faMagnifyingGlassMinus} />
          </div>
        )}
      </div>
    </section>
  );
}

export default Project;
