import style from "./AuthorizedBlock.module.scss";
import userPhoto from "./icon/user.png";
//
import { removeState } from "../../../helpers/removeState";

const AuthorizedBlock = () => {
  const handleClick = () => {
    removeState();
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
