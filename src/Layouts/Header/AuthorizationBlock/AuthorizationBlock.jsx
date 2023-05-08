import { Link } from "react-router-dom";
import style from "./AuthorizationBlock.module.scss";

const AuthorizationBlock = () => {
  return (
    <div className={style.box}>
      <Link className={style.register}>Зарегистрироваться</Link>
      <div className={style.line}></div>
      <Link className={style.login} to={"/login"}>Войти</Link>
    </div>
  );
};
export default AuthorizationBlock;
