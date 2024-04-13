import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Experience.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineWork } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const experienceQuery = `*[_type == "experiences"] | order(_createdAt desc)`;

    client.fetch(experienceQuery).then((data) => {
      setExperiences(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        Experience <span>&</span> Education
      </h2>
      <div className="app__experience-container">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={
                index === 0
                  ? {
                      background:
                        experience.type === "education"
                          ? "var(--education-color)"
                          : "var(--work-color)",
                      color: "#fff",
                    }
                  : null
              }
              contentArrowStyle={
                index === 0
                  ? {
                      borderRight:
                        experience.type === "education"
                          ? "7px solid var(--education-color)"
                          : "7px solid var(--work-color)",
                    }
                  : null
              }
              className={
                experience.type === "education"
                  ? "vertical-timeline-element--education"
                  : "vertical-timeline-element--work"
              }
              date={experience.year}
              dateClassName={index === 0 ? "text-black" : ""}
              iconStyle={
                experience.type === "education"
                  ? { background: "var(--education-color)", color: "#fff" }
                  : { background: "var(--work-color)", color: "#fff" }
              }
              icon={
                experience.type === "education" ? (
                  <PiStudentFill />
                ) : (
                  <MdOutlineWork />
                )
              }
            >
              <h3 className="vertical-timeline-element-title">
                {experience.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {experience.subtitle}
              </h4>
              <p id="description">{experience.desc}</p>
            </VerticalTimelineElement>
          ))}
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<FaStar />}
          />
        </VerticalTimeline>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Experience, "app__skills-exp"),
  "experience",
  "app__primarybg"
);
