import style from "./TariffCard.module.scss";

// components
import CardHead from "./CardHead/CardHead";
import CardPrice from "./CardPrice/CardPrice";
import Button from "../Button/Button";

const TariffCard = (props) => {
  const {
    checked,
    title,
    description,
    icon,
    backgroundColor,
    color,
    price,
    lowPrice,
    instalment,
    structureItem,
  } = props;

  return (
    <div
      className={style.card}
      style={{ border: checked ? `2px solid ${backgroundColor}` : "none" }}
    >
      <CardHead
        title={title}
        description={description}
        icon={icon}
        background={backgroundColor}
        color={color}
      />
      <div className={style.cardBody}>
        <div>
          {checked ? (
            <span className={style.checkItem}>Текущий тариф</span>
          ) : null}
          <CardPrice
            price={price}
            lowPrice={lowPrice}
            instalment={instalment}
          />
        </div>
        <div>
          <ul className={style.list}>
            <h6 className={style.listTitle}>В тариф входит:</h6>
            {structureItem
              ? structureItem.map((item, idx) => {
                  return (
                    <li className={style.listItem} key={idx}>
                      {item}
                    </li>
                  );
                })
              : null}
          </ul>
          <Button
            className={style.button}
            styleCustom={
              checked ? { background: "#D2D2D2", color: "#000000" } : null
            }
          >
            {checked ? "Перейти в личный кабинет" : "Подробнее"}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default TariffCard;
