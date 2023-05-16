import style from "./SectionTitle.module.scss";
//
import Characters from "../../images/Characters.png";

const SectionTitle = () => {
  return (
    <section className={style.section}>
      <h1 className={style.title}>
        Для оформления подписки на тариф, необходимо авторизоваться.
      </h1>
      <img className={style.image} src={Characters} alt="image characters" />
    </section>
  );
};
export default SectionTitle;
