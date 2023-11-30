function Card() {
  return (
    <div className="card">
      <div className="card__img">
        <p>image</p>
      </div>
      <div className="card__content">
        <h3 className="card__content__title">title</h3>
        <div className="card__content__link">
          <a>Github</a>
          <a>Site</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
