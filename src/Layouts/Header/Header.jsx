import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import Logo from "../images/header-logo.png";
import AuthorizationBlock from "./AuthorizationBlock/AuthorizationBlock";

const Header = () => {
  return (
    <header className={style.header + " container"}>
      <img src={Logo} alt="logo" className="logo" />
      <nav className={style.nav}>
        <Link className={style.link} to={'/'}>Главная</Link>
        <Link className={style.link} to={'/g'}>Тарифы</Link>
        <Link className={style.link} to={'/kj'}>FAQ</Link>
      </nav>
      <AuthorizationBlock />
    </header>
  );
};
export default Header;
