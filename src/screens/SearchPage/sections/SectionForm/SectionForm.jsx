import { useState, useEffect } from "react";
import style from "./SectionForm.module.scss";
//
import SearchForm from "../SearchForm/SearchForm";
//
import Document from "../../images/Document.svg";

const SectionForm = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1024px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 1024px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <section className={style.sectionForm}>
      <div className={style.wrapperText}>
        <div>
          <h1 className={style.title}>
            Найдите необходимые данные в пару кликов.
          </h1>
          <p className={style.description}>
            Задайте параметры поиска. Чем больше заполните, тем точнее поиск
          </p>
        </div>
        {!matches && <img src={Document} alt="document icon" />}
      </div>
      <SearchForm />
    </section>
  );
};
export default SectionForm;
