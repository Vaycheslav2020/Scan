import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import style from "./SectionGeneralSummary.module.scss";
//
import SectionSummary from "../SectionSummary/SectionSummary";
import SectionSummaryMobile from "../SectionSummaryMobile/SectionSummaryMobile";

const SectionGeneralSummary = () => {
  const { histograms } = useSelector((state) => state.histograms);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <section className={style.section + " container"}>
      <h3 className={style.title}>Общая сводка</h3>
      <p className={style.textInfo}>Найдено 4 221 вариантов</p>
      {matches && <SectionSummary histograms={histograms} />}
      {!matches && <SectionSummaryMobile histograms={histograms} />}
    </section>
  );
};
export default SectionGeneralSummary;
