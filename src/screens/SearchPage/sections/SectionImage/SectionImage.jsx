import style from "./SectionImage.module.scss";

import Document from "../../images/Document.svg";
import Folders from "../../images/Folders.svg";
import Pictures from "../../images/search-bg.png";

const SectionImage = () => {
  return (
    <section className={style.section}>
      <div className={style.iconWrapper}>
        <img src={Document} alt="icon document" />
        <img src={Folders} alt="icon document" />
      </div>
      <img className={style.pictures} src={Pictures} alt="Pictures" />
    </section>
  );
};
export default SectionImage;
