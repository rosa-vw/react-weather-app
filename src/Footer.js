import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      This project was coded by Rosavw, is open-sourced on{" "}
      <a
        href="https://github.com/rosa-vw/react-weather-app"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>{" "}
      and hosted on{" "}
      <a
        href="https://react-weather-app-rosavw.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        Netlify
      </a>
    </div>
  );
}

export default Footer;
