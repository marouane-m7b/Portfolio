import React from "react";
import { NavigationDots } from "../components";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <div className="app__placeholder"></div>
        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p>&copy; 2024 Marouane Mahboub. All rights reserved.</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
