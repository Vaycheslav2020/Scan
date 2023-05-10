import style from "./SearchPage.module.scss";

import SearchForm from "./sections/SearchForm/SearchForm";
import SectionImage from "./sections/SectionImage/SectionImage";

const SearchPage = () => {
  return (
    <main className={style.main + " container"}>
      <section className={style.sectionForm}>
        <h1 className={style.title}>
          Найдите необходимые данные в пару кликов.
        </h1>
        <p className={style.description}>
          Задайте параметры поиска. Чем больше заполните, тем точнее поиск
        </p>
        <SearchForm />
      </section>
      <SectionImage />
    </main>
  );
};

export default SearchPage;
