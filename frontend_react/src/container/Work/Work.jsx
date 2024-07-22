import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import "./Work.scss";
import { NavigationDots } from "../../components";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.skills.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <div id="work" className={`app__container  app__primarybg`}>
        <div className="app__placeholder"></div>
        <div className="app__wrapper app__flex">
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
            className={`app__works app__flex`}
          >
            <h2 className="head-text">
              My Creative <span>Portfolio</span> Section
            </h2>


            <div className="app__work-filter">
              {[
                "React Js",
                "Laravel",
                "React Native",
                "Javascript",
                "Php",
                "Css",
                "All",
              ].map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleWorkFilter(item)}
                  className={`app__work-filter-item app__flex p-text ${activeFilter === item ? "item-active" : ""
                    }`}
                >
                  {item}
                </div>
              ))}
            </div>

            <div style={{
              backgroundColor: '#f8d7da',
              border: '1px solid #f5c6cb',
              borderRadius: '4px',
              padding: '10px',
              margin: '20px 0',
              color: '#721c24',
              fontFamily: 'Arial, sans-serif'
            }}>
              <p style={{
                margin: '0',
                fontSize: '1em'
              }}>
                <strong>Important Notice:</strong> If the GitHub code or website preview is unavailable, the client requested privacy.
              </p>
            </div>


            <motion.div
              animate={animateCard}
              transition={{ duration: 0.5, delayChildren: 0.5 }}
              className="app__work-portfolio"
            >
              {filterWork.map((work, index) => (
                <div className="app__work-item app__flex" key={index}>
                  <div className="app__work-img app__flex">
                    <img
                      loading="lazy"
                      src={urlFor(work.imgUrl)}
                      alt={work.title}
                    />
                    <motion.div
                      whileHover={{ opacity: 1 }}
                      animate={{ opacity: 0 }}
                      transition={{
                        opacity: { duration: 0.25, ease: "easeInOut" },
                        default: {
                          duration: 0.25,
                          ease: "easeInOut",
                          sskillgerChildren: 0.5,
                        },
                      }}
                      className="app__work-hover app__flex"
                    >
                      <a
                        href={work.projectLink}
                        aria-label={`${work.title}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <motion.div
                          whileInView={{ scale: [0, 1] }}
                          whileHover={{ scale: [1, 0.9] }}
                          transition={{ duration: 0.25 }}
                          className="app__flex"
                        >
                          <AiFillEye />
                        </motion.div>
                      </a>
                      {work.codeLink !== "#" ? (
                        <a
                          href={work.codeLink}
                          aria-label={`${work.title}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <motion.div
                            whileInView={{ scale: [0, 1] }}
                            whileHover={{ scale: [1, 0.9] }}
                            transition={{ duration: 0.25 }}
                            className="app__flex"
                          >
                            <AiFillGithub />
                          </motion.div>
                        </a>
                      ) : (
                        <></>
                      )}
                    </motion.div>
                  </div>

                  <div className="app__work-content app__flex">
                    <div className="h4 bold-text">{work.title}</div>
                    <div className="app__flex-skills">
                      {work.skills.map((skill, index) => (
                        <div key={index} className="app__work-skill">
                          {skill}
                        </div>
                      ))}
                    </div>
                    <p className="p-text" style={{ marginTop: 10 }}>
                      {work.description}
                    </p>

                    <div className="app__work-tag app__flex">
                      <p className="p-text">{work.skills[0]}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
          <div className="copyright"></div>
        </div>
        <NavigationDots active="work" />
      </div>
    </>
  );
};

export default Work;
