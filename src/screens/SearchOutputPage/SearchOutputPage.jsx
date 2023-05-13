import style from "./SearchOutputPage.module.scss";
import SectionHead from "./sections/SectionHead/SectionHead";
import SectionGeneralSummary from "./sections/SectionGeneralSummary/SectionGeneralSummary";

import Image from "./images/img.png";
import ImageTwo from "./images/img-2.png";

import Document from "../../shared/Document/Document";
import Button from "../../shared/Button/Button";
const SearchOutputPage = () => {
  return (
    <main className={style.main}>
      <SectionHead />
      <SectionGeneralSummary />
      <div className="container">
        <h3 className={style.titleList}>Список документов</h3>
        <div className={style.documentList}>
          <Document Image={Image} />
          <Document Image={ImageTwo} />
        </div>
        <Button className={style.buttonList}>Показать больше</Button>
      </div>
    </main>
  );
};
export default SearchOutputPage;
