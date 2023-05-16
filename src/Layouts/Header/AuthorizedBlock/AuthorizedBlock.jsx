import style from "./AuthorizedBlock.module.scss";
//
import userPhoto from "./icon/user.png";
//
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// store
import { setAuth } from "../../../store/isAuth";

const AuthorizedBlock = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.clear();
    dispatch(setAuth());
    navigate("/");
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
