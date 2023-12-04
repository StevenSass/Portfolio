import Carrousel from "../../components/Carrousel/Carrousel";
import Contact from "../../components/Contact/Contact";
import Parcours from "../../components/Parcours/Parcours";
import Presentation from "../../components/Presentation/Presentation";
import Project from "../../components/Project/Project";

function Home() {
  return (
    <main>
      <Presentation />
      <Carrousel />
      <Project />
      <Parcours />
      <Contact />
    </main>
  );
}

export default Home;
