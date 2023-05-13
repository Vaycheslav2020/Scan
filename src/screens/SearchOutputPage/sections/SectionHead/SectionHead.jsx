import style from "./SectionHead.module.scss";
import Illustration from "../../images/search-output.png";

const SectionHead = () => {
  return (
    <section className="container">
      <div className={style.wrapper}>
        <div>
          <h1 className={style.title}>Ищем. Скоро <br /> будут результаты</h1>
          <p className={style.description}>
            Поиск может занять некоторое время, просим сохранять терпение.
          </p>
        </div> 
        <img src={Illustration} className={style.illustration} alt="illustration" />
      </div>
    </section>
  );
};
export default SectionHead;
