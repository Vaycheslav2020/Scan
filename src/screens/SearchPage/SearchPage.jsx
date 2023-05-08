import style from "./SearchPage.module.scss";

import Document from "./images/Document.svg";
import Folders from "./images/Folders.svg";
import SearchForm from "./sections/SearchForm/SearchForm";

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
      <div>
        <img src={Document} alt="icon document" />
        <img src={Folders} alt="icon document" />
      </div>
    </main>
  );
};

export default SearchPage;
