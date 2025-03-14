import "./Navbar.css";
import NavbarBottom from "./NavbarBottom";
import NavbarMidlle from "./NavbarMidlle";
import NavbarTop from "./NavbarTop";
import { memo } from "react";
const Navbar = () => {
  return (
    <div>
      <NavbarTop />
      <NavbarMidlle />
      <NavbarBottom />
    </div>
  );
};

export default memo(Navbar);
