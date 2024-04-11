import React from "react";
import { FiGithub } from "react-icons/fi";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";

const SocialMediaFixed = () => (
  <div className="app__social-fixed">
    <a href="https://github.com/marouane-m7b" target="_blank" aria-label="Github Link" rel="noreferrer">
      <FiGithub />
    </a>
    <a href="https://wa.me/+212600000000" target="_blank" rel="noreferrer" aria-label="Whatsapp Link">
      <FaWhatsapp />
    </a>
    <a href="https://www.youtube.com/channel/UC9y9wJ9kO2Qn9NwG2Kb7WkA" target="_blank" rel="noreferrer" aria-label="Youtube Link">
      <FaYoutube />
    </a>
  </div>
);

export default SocialMediaFixed;
