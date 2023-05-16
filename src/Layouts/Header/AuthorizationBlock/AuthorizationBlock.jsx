import style from "./AuthorizationBlock.module.scss";
//
import { Link } from "react-router-dom";

const AuthorizationBlock = () => {
  return (
    <div className={style.box}>
      <Link className={style.register}>Зарегистрироваться</Link>
      <div className={style.line}></div>
      <Link className={style.login} to={"/account/login"}>
        Войти
      </Link>
    </div>
  );
};
export default AuthorizationBlock;
