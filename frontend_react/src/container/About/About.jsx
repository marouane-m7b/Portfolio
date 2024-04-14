import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { urlFor, client } from "../../client";
import { NavigationDots } from "../../components";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <div id="about" className={`app__container app__whitebg`}>
      <div className="app__placeholder"></div>
      <div className="app__wrapper app__flex">
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
          className={`app__about app__flex`}
        >
          <h2 className="head-text">
            Turning <span>ideas</span> into <span>reality</span> through the art of programming
          </h2>

          <div className="app__profiles">
            {abouts.map((about, index) => (
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: "tween" }}
                className="app__profile-item"
                key={about.title + index}
              >
                <img
                  loading="lazy"
                  src={urlFor(about.imgUrl)}
                  alt={about.title}
                />
                <h2 className="bold-text" style={{ marginTop: 20 }}>
                  {about.title}
                </h2>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {about.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="copyright"></div>
      </div>
      <NavigationDots active="about" />
    </div>
  );
};

export default About;
