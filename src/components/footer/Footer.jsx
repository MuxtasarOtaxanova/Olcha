import FooterMidlle from "./FooterMidlle";
import FooterTop from "./FooterTop";
import "./Footer.css";
import FooterBottom from "./FooterBottom";
import { memo } from "react";
const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <FooterTop />
        <FooterMidlle />
        <FooterBottom />
      </div>
    </div>
  );
};

export default memo(Footer);
