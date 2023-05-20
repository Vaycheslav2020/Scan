import style from "./Accounts.module.scss";
// icon
import Google from "../../images/Google.svg";
import Facebook from "../../images/Facebook.svg";
import Yandex from "../../images/Yandex.svg";

const Accounts = () => {
  return (
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
  );
};

export default Accounts;
