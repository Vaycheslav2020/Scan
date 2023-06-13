import style from "./DesktopNavigateMenu.module.scss";
// 
import { Link } from "react-router-dom";
// component
import LimitInfoBlock from "../LimitInfoBlock/LimitInfoBlock";
import AuthorizationBlock from "../AuthorizationBlock/AuthorizationBlock";
import AuthorizedBlock from "../AuthorizedBlock/AuthorizedBlock";
import { useSelector } from "react-redux";

const DesktopNavigateMenu = () => {
  
  const { isAuth } = useSelector((state) => state.isAuth);
  return (
    <>
      <nav className={style.nav}>
        <Link className={style.link} to={"/"}>
          Главная
        </Link>
        <Link className={style.link} to={"/tariff"}>
          Тарифы
        </Link>
        <Link className={style.link} to={"/faq"}>
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
    </>
  )
}

export default DesktopNavigateMenu;