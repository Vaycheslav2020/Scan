import style from "./MobileNavMenu.module.scss";
import logo from "./white-logo.png";
import { ReactComponent as Close } from "./close.svg";
import { ReactComponent as Burger } from "./burger.svg";
//
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
//
import LimitInfoBlock from "../LimitInfoBlock/LimitInfoBlock";
import AuthorizationBlock from "../AuthorizationBlock/AuthorizationBlock";
import { useState } from "react";
import { removeState } from "../../../helpers/removeState";

const MobileNavMenu = () => {
  const { isAuth } = useSelector((state) => state.isAuth);
  const [show, setShow] = useState(false);
  const handleClick = () => {
    removeState();
    setShow(false);
  };
  const handleShow = () => {
    setShow(false);
  };
  return (
    <>
      <div className={style.wrapper}>{isAuth ? <LimitInfoBlock /> : null}</div>
      {show ? (
        <nav className={style.nav}>
          <div className={style.headMenu + " container"}>
            <Link className={style.link} to={"/"} onClick={handleShow}>
              <img src={logo} alt="logo" />
            </Link>
            <button
              onClick={() => {
                setShow(false);
              }}
            >
              <Close />
            </button>
          </div>
          <Link className={style.link} to={"/"} onClick={handleShow}>
            Главная
          </Link>
          <Link className={style.link} to={"/tariff"} onClick={handleShow}>
            Тарифы
          </Link>
          <Link className={style.link} to={"/faq"} onClick={handleShow}>
            FAQ
          </Link>
          {isAuth ? (
            <button className={style.logout} onClick={handleClick}>
              Выйти
            </button>
          ) : (
            <AuthorizationBlock handleShow={handleShow} />
          )}
        </nav>
      ) : (
        <button
          onClick={() => {
            setShow(true);
          }}
        >
          <Burger />
        </button>
      )}
    </>
  );
};

export default MobileNavMenu;
