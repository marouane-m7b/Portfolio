import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "./Experience.scss";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const experienceQuery = '*[_type == "experiences"]';
    const educationQuery = '*[_type == "education"]';

    client.fetch(experienceQuery).then((data) => {
      setExperiences(data);
    });

    client.fetch(educationQuery).then((data) => {
      setEducation(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Experience & Education</h2>

      <div className="app__experience-container">
        <div className="app__experience-list">
          {experiences.map((experience) => (
            <motion.div className="app__experience-item" key={experience.year}>
              <div className="app__experience-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__experience-works">
                {experience.works.map((workRef) => (
                  <SanityContent workRef={workRef._ref} key={workRef._key} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
        <div className="app__education-list">
          <h3>Education</h3>
          {education.map((edu, index) => (
            <div className="education-item" key={index}>
              <p>{edu.year}</p>
              <p>{edu.school}</p>
              <p>{edu.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

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
        className="app__experience-work"
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
        className="experience-tooltip"
        id={work.name}
        content={`${work.desc}`}
      ></ReactTooltip>
    </>
  );
};

export default AppWrap(
    MotionWrap(Experience, "app__skills-exp"),
    "experience",
    "app__whitebg"
)
