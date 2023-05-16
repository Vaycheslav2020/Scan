import style from "./SearchPage.module.scss";
//
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// components
import SearchForm from "./sections/SearchForm/SearchForm";
import SectionImage from "./sections/SectionImage/SectionImage";

const SearchPage = () => {
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.isAuth);
  if (isAuth === false) {
    return navigate("/");
  }
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
