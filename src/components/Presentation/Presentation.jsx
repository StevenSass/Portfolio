import { motion } from "framer-motion";

const animation = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

function Presentation() {
  return (
    <motion.section
      className="presentation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}>
      <motion.h2
        className="presentation__title"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}>
        Présentation :
      </motion.h2>
      <div className="presentation__section">
        <div className="presentation__section__part1">
          <motion.p
            className="presentation__section__part1__name"
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}>
            Sass Steven
          </motion.p>
          <motion.p
            className="presentation__section__part1__text"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}>
            Développeur junior de 22 ans passionné par la création de sites web
            avec une expertise centrée sur React.
          </motion.p>
        </div>
        <div className="presentation__section__part2">
          <motion.p
            className="presentation__section__part2__text"
            initial={{ x: -100, y: -100, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1 }}>
            Ma fascination pour cette technologie me permet de façonner des
            interfaces modernes et réactives.
          </motion.p>
        </div>
        <div className="presentation__section__part3">
          <motion.p
            className="presentation__section__part3__text1"
            initial={{ x: 200, y: 150, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1 }}>
            Chaque ligne de code représente une opportunité d'apprentissage pour
            moi,
          </motion.p>
          <motion.p
            className="presentation__section__part3__text2"
            initial={{ x: 200, y: 150, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1 }}>
            je suis enthousiaste à l'idée de contribuer à de nouveaux projets
            innovants.
          </motion.p>
        </div>
        <div className="presentation__section__part4">
          <motion.p
            className="presentation__section__part4__text"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}>
            Explorez mon portfolio pour découvrir mes réalisations passées !
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}

export default Presentation;
