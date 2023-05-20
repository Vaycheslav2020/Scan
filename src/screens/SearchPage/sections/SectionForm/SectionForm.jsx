import style from "./SectionForm.module.scss";
// 
import SearchForm from "../SearchForm/SearchForm";

const SectionForm = () => {
  return (
    <section className={style.sectionForm}>
        <h1 className={style.title}>
          Найдите необходимые данные в пару кликов.
        </h1>
        <p className={style.description}>
          Задайте параметры поиска. Чем больше заполните, тем точнее поиск
        </p>
        <SearchForm />
      </section>
  )
}
export default SectionForm;