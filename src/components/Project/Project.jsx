import Card from "../Card/Card";

function Project() {
  return (
    <section className="project">
      <div className="project__filter">
        <p className="project__filter__item">Tout</p>
        <p className="project__filter__item">CSS/HTML</p>
        <p className="project__filter__item">Javascript</p>
        <p className="project__filter__item">React</p>
        <p className="project__filter__item">React/Redux</p>
      </div>
      <div className="project__list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}

export default Project;
