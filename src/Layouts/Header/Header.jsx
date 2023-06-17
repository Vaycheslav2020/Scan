import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//
import style from "./Header.module.scss";
// logo
import Logo from "../images/header-logo.png";
// components
import DesktopNavigateMenu from "./DesktopNavigateMenu/DesktopNavigateMenu";
import MobileNavMenu from "./MobileNavMenu/MobileNavMenu";

const Header = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1024px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 1024px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <header className={style.header + " container"}>
      <figure className={style.logo}>
        <Link to={"/"}>
          <img src={Logo} alt="logo" />
        </Link>
      </figure>
      {matches && <DesktopNavigateMenu />}
      {!matches && <MobileNavMenu />}
    </header>
  );
};
export default Header;
