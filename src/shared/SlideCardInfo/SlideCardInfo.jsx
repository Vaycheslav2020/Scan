import style from "./SlideCardInfo.module.scss";

const SlideCardInfo = ({ children, icon, className = "" }) => {
  return (
    <div className={style.card + " " + className}>
      {icon? <img src={icon} alt="card icon" /> : null}
      <p>{children}</p>
    </div>
  );
};
export default SlideCardInfo;
