import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";
import ProgressProvider from "./ProgressProvider";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  const SanityContent = ({ workRef }) => {
    const [work, setWork] = useState(null);

    useEffect(() => {
      const query = `*[_id == "${workRef}"]{
                name,
                company,
                desc
            }`;
      client.fetch(query).then((data) => {
        if (data) setWork(data[0]);
      });
    }, [workRef]);

    if (!work) return null;

    return (
      <>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__skills-exp-work"
          data-tip
          data-for={work.name}
        >
          <h4 className="bold-text work-name">{work.name}</h4>
          <p className="p-text work-company">{work.company}</p>
        </motion.div>
        <ReactTooltip
          anchorSelect=".work-name"
          place="top"
          effect="solid"
          delayHide={200}
          className="skills-tooltip"
          id={work.name}
          content={`${work.desc}`}
        ></ReactTooltip>
      </>
    );
  };

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills
            .sort((a, b) => b.progress - a.progress)
            .map((skill) => (
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
                  <ProgressProvider valueStart={0} valueEnd={skill.progress}>
                    {(value) => (
                      <CircularProgressbarWithChildren
                        value={value}
                        styles={buildStyles({
                          pathTransitionDuration: 0.5,
                          pathColor: `rgba(62, 152, 199, ${value})`,
                          trailColor: "#e3e3e3",
                          backgroundColor: "#3e98c7",
                        })}
                        strokeWidth={3}
                      >
                        <img
                          src={urlFor(skill.icon)}
                          alt={skill.name}
                          style={{ width: "50%", height: "50%" }} // Adjust image size to make it smaller
                        />
                        <span className="bold-text">{skill.progress}%</span>
                      </CircularProgressbarWithChildren>
                    )}
                  </ProgressProvider>
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>
            ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((workRef) => (
                  <SanityContent workRef={workRef._ref} key={workRef._key} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
