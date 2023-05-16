import style from "./Header.module.scss";
//
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// logo
import Logo from "../images/header-logo.png";
// components
import AuthorizationBlock from "./AuthorizationBlock/AuthorizationBlock";
import AuthorizedBlock from "./AuthorizedBlock/AuthorizedBlock";
import LimitInfoBlock from "./LimitInfoBlock/LimitInfoBlock";

const Header = () => {
  const { isAuth } = useSelector((state) => state.isAuth);
  return (
    <header className={style.header + " container"}>
      <figure className={style.logo}>
        <img src={Logo} alt="logo" />
      </figure>
      <nav className={style.nav}>
        <Link className={style.link} to={"/"}>
          Главная
        </Link>
        <Link className={style.link} to={"/g"}>
          Тарифы
        </Link>
        <Link className={style.link} to={"/kj"}>
          FAQ
        </Link>
      </nav>
      <div className={style.wrapper}>
        {isAuth ? (
          [<LimitInfoBlock key={"limit"} />, <AuthorizedBlock key={"user"} />]
        ) : (
          <AuthorizationBlock />
        )}
      </div>
    </header>
  );
};
export default Header;
