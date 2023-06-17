import style from "./AuthorizationBlock.module.scss";
//
import { Link } from "react-router-dom";

const AuthorizationBlock = ({ handleShow }) => {
  return (
    <div className={style.box}>
      <Link className={style.register} onClick={handleShow}>
        Зарегистрироваться
      </Link>
      <div className={style.line}></div>
      <Link className={style.login} to={"/account/login"} onClick={handleShow}>
        Войти
      </Link>
    </div>
  );
};
export default AuthorizationBlock;
