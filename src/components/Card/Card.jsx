import "./Card.scss";

import { useState } from "react";
import github from "../../img/github.svg";
import site from "../../img/window-restore-regular.svg";
import { createPortal } from "react-dom";
import Modal from "../Modal/Modal";

function Card({ id }) {
  const [showModal, setShowModal] = useState(false);

  function linkGithub(event) {
    event.stopPropagation();

    // Votre logique pour rediriger vers GitHub
    window.location.href = id.link.github;
  }

  function linkSite(event) {
    event.stopPropagation();

    // Votre logique pour rediriger vers GitHub
    window.location.href = id.link.github;
  }

  return (
    <>
      <div className="card" onClick={() => setShowModal(true)}>
        <div className="card__img">
          <img src={id.cover} alt="" />
        </div>
        <div className="card__content">
          <h3 className="card__content__title">{id.projetname}</h3>
          <div onClick={linkGithub}>
            <img src={github} alt="Logo Github" />
          </div>
          <div onClick={linkSite}>
            <img src={site} alt="Logo Site" />
          </div>
        </div>
      </div>
      {showModal &&
        createPortal(
          <Modal closeModal={() => setShowModal(false)} data={id} />,
          document.body
        )}
    </>
  );
}

export default Card;
