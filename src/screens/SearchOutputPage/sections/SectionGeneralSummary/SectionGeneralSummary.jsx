import style from "./SectionGeneralSummary.module.scss";
import { useSelector } from "react-redux";
//
import SectionSummary from "../SectionSummary/SectionSummary";

const SectionGeneralSummary = () => {
  const { histograms } = useSelector((state) => state.histograms);

  return (
    <section className={style.section + " container"}>
      <h3 className={style.title}>Общая сводка</h3>
      <p className={style.textInfo}>Найдено 4 221 вариантов</p>
      <SectionSummary histograms={histograms} />
    </section>
  );
};
export default SectionGeneralSummary;
