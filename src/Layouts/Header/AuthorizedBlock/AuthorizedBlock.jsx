import style from "./AuthorizedBlock.module.scss";
//
import userPhoto from "./icon/user.png";
//
import { useDispatch } from "react-redux";
//
import {deleteAccountData} from "../../../store/accountData";
// store
import { setAuth } from "../../../store/isAuth";

const AuthorizedBlock = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    localStorage.clear();
    dispatch(setAuth());
    dispatch(deleteAccountData());
  };

  return (
    <div className={style.box}>
      <div>
        <p className={style.name}>Алексей А.</p>
        <button className={style.logout} onClick={handleClick}>
          Выйти
        </button>
      </div>
      <figure className={style.figure}>
        <img className={style.photo} src={userPhoto} alt="user photo" />
      </figure>
    </div>
  );
};

export default AuthorizedBlock;
