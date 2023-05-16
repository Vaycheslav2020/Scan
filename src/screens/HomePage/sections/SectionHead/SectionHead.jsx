import style from "./SectionHead.module.scss";
//
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// components
import Button from "../../../../shared/Button/Button";

const SectionHead = () => {
  const { isAuth } = useSelector((state) => state.isAuth);
  return (
    <section className={style.sectionHead}>
      <div className="container">
        <h1 className={style.title}>
          сервис по поиску <br /> публикаций <br /> о компании <br /> по его ИНН
        </h1>
        <p className={style.description}>
          Комплексный анализ публикаций, получение данных в формате PDF на
          электронную почту.
        </p>
        {isAuth ? (
          <Link to={"/search"}>
            <Button>Запросить данные</Button>
          </Link>
        ) : null}
      </div>
    </section>
  );
};
export default SectionHead;
