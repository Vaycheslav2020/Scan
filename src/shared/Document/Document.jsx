import style from "./Document.module.scss";

const Document = ({ Image }) => {
  return (
    <div className={style.document}>
      <div className={style.head}>
        <span>13.09.2021</span>
        <a>Комсомольская правда KP.RU</a>
      </div>
      <h5 className={style.title}>Скиллфэктори - лучшая онлайн-школа для будущих айтишников</h5>
      <div className={style.mark}>
        <span>Технические новости</span>
      </div>
      <img className={style.poster} src={Image} alt="Poster" />
      <p className={style.paragraph}>
        SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь.
        С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов,
        самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере,
        Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других
        топовых компаниях.
      </p>

      <p className={style.paragraph}>
        Принципы SkillFactory: акцент на практике, забота о студентах и ориентир
        на трудоустройство. 80% обучения — выполнение упражнений и реальных
        проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и
        комьюнити курса. А карьерный центр помогает составить резюме,
        подготовиться к собеседованиям и познакомиться с IT-рекрутерами.
      </p>
      <div className={style.footerDocument}>
        <a className={style.sourceLink}>Читать в источнике</a>
        <span>2 543 слова</span>
      </div>
    </div>
  );
};
export default Document;
