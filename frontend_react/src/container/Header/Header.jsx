import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Header.scss";
import { NavigationDots } from "../../components";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div id="home" className={`app__container`}>
    <div className="app__placeholder"></div>
    <div className="app__wrapper app__flex">
      <div className="app__header app__flex">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
          <div className="app__header-badge">
            <div className="badge-cmp app__flex">
              <span>👋</span>
              <div style={{ marginLeft: 20 }}>
                <p className="p-text">Hello, I am</p>
                <h1 className="head-text">Marouane</h1>
              </div>
            </div>

            <div className="tag-cmp app__flex">
              <p className="p-text">Mobile Developer</p>
              <p className="p-text">Web Developer</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__header-img"
        >
          <img
            loading="lazy"
            src={images.profile}
            alt="marouane mahboub profile"
          />
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={images.circle}
            alt="profile_circle"
            className="overlay_circle"
          />
        </motion.div>

        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles"
        >
          {[images.react, images.laravel, images.mysql].map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img loading="lazy" src={circle} alt="profile_bg" />
            </div>
          ))}
        </motion.div>

        <svg
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,288L60,277.3C120,267,240,245,360,240C480,235,600,245,720,261.3C840,277,960,299,1080,266.7C1200,235,1320,149,1380,106.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="copyright"></div>
    </div>
    <NavigationDots active="home" />
  </div>
);

export default Header;
