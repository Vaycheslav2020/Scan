import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
//
import style from "./SectionHead.module.scss";
// components
import Button from "../../../../shared/Button/Button";

const SectionHead = () => {
  const { isAuth } = useSelector((state) => state.isAuth);
  const navigate = useNavigate();
  return (
    <section className=" container">
      <div className={style.sectionHead}>
        <h1 className={style.title}>
          сервис по поиску <br /> публикаций <br /> о компании <br /> по его ИНН
        </h1>
        <p className={style.description}>
          Комплексный анализ публикаций, получение данных в формате PDF на
          электронную почту.
        </p>
        {isAuth ? (
          <Button
            onSend={() => {
              navigate("/search");
            }}
          >
            Запросить данные
          </Button>
        ) : null}
      </div>
    </section>
  );
};
export default SectionHead;
