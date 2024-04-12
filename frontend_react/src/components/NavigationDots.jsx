/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {[
      "home",
      "about",
      "work",
      "skills",
      "experience",
      "testimonial",
      "contact",
    ].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        aria-label={`${item}`}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: "#0059a5" } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;
