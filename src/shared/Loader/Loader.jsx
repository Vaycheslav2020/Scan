import style from "./Loader.module.scss";
import Spin from "./image/spin.png";

const Loader = () => {
  return (
    <div className={style.loader}>
      <figure className={style.spin}>
        <img src={Spin} alt="spin image" />
      </figure>
    </div>
  );
};

export default Loader;
