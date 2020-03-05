import React from "react";
import "./footer.css";

function Footer({ children }) {
  return (
    <div>
      <div className="phantomStyle" />
      <div className="footerStyle">{children}</div>
    </div>
  );
}

export default Footer;
