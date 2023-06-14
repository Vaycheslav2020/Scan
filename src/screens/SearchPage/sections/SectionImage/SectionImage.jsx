import { useState, useEffect } from "react";
import style from "./SectionImage.module.scss";
//
import Document from "../../images/Document.svg";
import Folders from "../../images/Folders.svg";
import Pictures from "../../images/search-bg.png";

const SectionImage = () => {
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
      {matches && (
        <div className={style.iconWrapper}>
          <img src={Document} alt="icon document" />
          <img src={Folders} alt="icon document" />
        </div>
      )}
      <img className={style.pictures} src={Pictures} alt="Pictures" />
    </section>
  );
};
export default SectionImage;
