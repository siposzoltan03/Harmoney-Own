import React from "react";
import "./Footer.css";

function Footer({ children }) {
  return (
    <div>
      <div className="phantomStyle" />
      <div className="footerStyle">{children}</div>
    </div>
  );
}

export default Footer;
