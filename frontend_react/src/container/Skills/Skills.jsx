import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { client, urlFor } from "../../client";
import "./Skills.scss";
import ProgressProvider from "./ProgressProvider";
import { NavigationDots } from "../../components";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [filterSkills, setFilterSkills] = useState([]);
  const [activeFilter, setActiveFilter] = useState("Languages");
  const [animateCard, setAnimateCard] = useState({ x: 0, opacity: 1 });

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"] | order(progress desc)';
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
      setFilterSkills(
        data.filter((skill) => skill.tags.includes(activeFilter))
      );
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ x: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ x: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterSkills(skills);
      } else {
        setFilterSkills(skills.filter((skill) => skill.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <div id="skills" className={`app__container app__whitebg`}>
      <div className="app__placeholder"></div>
      <div className="app__wrapper app__flex">
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
          className={`app__skills app__flex`}
        >
          <h2 className="head-text">Skills</h2>

          <div className="app__skills-container">
            <motion.div className="app__skills-list">
              <div className="app__work-filter app__work-filter-skills">
                {[
                  { show: "Languages", send: "Languages" },
                  { show: "Frontend", send: "Front" },
                  { show: "Backend", send: "Back" },
                  { show: "Mobile", send: "Mobile" },
                  { show: "CMS", send: "CMS" },
                  { show: "Other Tools", send: "Tools" },
                  { show: "All", send: "All" },
                ].map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleWorkFilter(item.send)}
                    className={`app__work-filter-item app__flex p-text ${
                      activeFilter === item.send ? "item-active" : ""
                    }`}
                  >
                    {item.show}
                  </div>
                ))}
              </div>
              <motion.div
                className="app__work-portfolio"
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
              >
                {filterSkills.map((skill) => (
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-item app__flex"
                    key={skill.name}
                  >
                    <div
                      className="app__flex"
                      style={{ backgroundColor: "transparent" }}
                    >
                      <ProgressProvider
                        valueStart={0}
                        valueEnd={skill.progress}
                      >
                        {(value) => (
                          <CircularProgressbarWithChildren
                            value={value}
                            styles={buildStyles({
                              pathTransitionDuration: 0.5,
                              pathColor: `var(--secondary-color)`,
                              trailColor: "#e3e3e3",
                              backgroundColor: "#3e98c7",
                            })}
                            strokeWidth={3}
                          >
                            {skill.icon ? (
                              <img
                                loading="lazy"
                                src={urlFor(skill.icon)}
                                alt={skill.name}
                                style={{ width: "50%", height: "50%" }}
                              />
                            ) : (
                              <p>{skill.name}</p>
                            )}
                          </CircularProgressbarWithChildren>
                        )}
                      </ProgressProvider>
                    </div>
                    <p className="p-text">{skill.name}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <div className="copyright"></div>
      </div>
      <NavigationDots active="skills" />
    </div>
  );
};

export default Skills;
