import style from "./CardHead.module.scss";

const CardHead = ({title, description, icon, background, color = "#000000"}) => {
  return (
    <div className={style.CardHead} style={{background: `${background}`, color: `${color}`}}>
      <div>
        <h5 className={style.title}>{title}</h5>
        <p>{description}</p>
      </div>
      <img className={style.icon} src={icon} alt="icon card" />
    </div>
  );
};

export default CardHead;
