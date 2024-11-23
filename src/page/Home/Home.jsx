import { motion } from "framer-motion";

import { variants, transition } from "../../assets/animations/framer-variants";

import hero from "../../assets/images/hero.png";

import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-left-container">
        <motion.div
          initial="initial"
          animate="animate"
          variants={variants.rise}
          transition={transition.rise}
          className="job-container"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1.1 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              repeatType: "reverse",
            }}
            className="circle-container"
          >
            <div className="circle" />
          </motion.div>
          <h4 className="job-text">Software Developer</h4>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={variants.moveRight}
          transition={transition.moveRight}
          className="user-name-container"
        >
          <h1 className="user-name">
            Charlotte <span>Nicholas.</span>
          </h1>
          <motion.button
            initial="initial"
            animate="animate"
            variants={variants.moveUp}
            transition={transition.moveUp}
            className="download-cv-button"
          >
            Download CV
          </motion.button>
        </motion.div>
      </div>
      <div className="home-right-container">
        <motion.img
          src={hero}
          alt="hero"
          className="hero"
          initial="initial"
          animate="animate"
          variants={variants.moveLeft}
          transition={transition.moveLeft}
        />
      </div>
    </div>
  );
};

export default Home;
