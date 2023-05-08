import { Link } from "react-router-dom";
import style from "./SectionForm.module.scss";
import Input from "../../../../shared/Input/Input";
import Button from "../../../../shared/Button/Button";
// icon
import Google from "../../images/Google.svg";
import Facebook from "../../images/Facebook.svg";
import Yandex from "../../images/Yandex.svg";

const SectionForm = () => {
  return (
    <form className={style.form} action="#">
      <div className={style.links}>
        <Link className={style.link + " " + style._active} to={"/login"}>
          Войти
        </Link>
        <Link className={style.link} to={"/registration"}>
          Зарегистрироваться
        </Link>
      </div>
      <Input label="Логин или номер телефона:" type="text" />
      <Input label="Пароль:" type="password" />
      <Button className={style.button}>Войти</Button>
      <Link className={style.recover} to={"/recover%password"}>
        Восстановить пароль
      </Link>
      <div className={style.accounts}>
        <span>Войти через:</span>
        <div className={style.accounts_wrapper}>
          <a>
            <img src={Google} alt="google" />
          </a>
          <a>
            <img src={Facebook} alt="Facebook" />
          </a>
          <a>
            <img src={Yandex} alt="Yandex" />
          </a>
        </div>
      </div>
    </form>
  );
};
export default SectionForm;
