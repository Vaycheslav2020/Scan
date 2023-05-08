import style from "./SectionHead.module.scss";

import Button from "../../../../shared/Button/Button";

const SectionHead = () => {
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
        <Button>Запросить данные</Button>
      </div>
    </section>
  );
};
export default SectionHead;
