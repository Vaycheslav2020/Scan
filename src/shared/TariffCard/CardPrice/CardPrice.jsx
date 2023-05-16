import style from "./CardPrice.module.scss";

const CardPrice = ({ price, lowPrice, instalment }) => {
  return (
    <div>
      <div>
        <span className={style.price}>{price} &#8381;</span>
        <del className={style.lowPrice}>{lowPrice} &#8381;</del>
      </div>
      {instalment ? (
        <p className={style.description}>
          или {instalment} ₽/мес. при рассрочке на 24 мес.
        </p>
      ) : null}
    </div>
  );
};
export default CardPrice;
