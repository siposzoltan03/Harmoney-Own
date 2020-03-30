import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="phantomStyle" />
      <div className="footerStyle">
          <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://icons8.com/icons/set/finance-document---v2"
          >
              Finance Document icon
          </a>{" "}
          icon by{" "}
          <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">
              Icons8
          </a>
          <br/>
          Copyright 2020
      </div>
    </div>
  );
}

export default Footer;
