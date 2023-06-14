import { useState, useEffect } from "react";
import style from "./SectionTitle.module.scss";
//
import Characters from "../../images/Characters.png";

const SectionTitle = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1024px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 1024px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  return (
    <section className={style.section}>
      <h1 className={style.title}>
        Для оформления подписки на тариф, необходимо авторизоваться.
      </h1>
      {matches && (
        <img className={style.image} src={Characters} alt="image characters" />
      )}
    </section>
  );
};
export default SectionTitle;
