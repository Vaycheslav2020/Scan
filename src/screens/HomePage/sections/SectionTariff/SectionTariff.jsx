import style from "./SectionTariff.module.scss";
import TariffCard from "../../../../shared/TariffCard/TariffCard";
//
import BeginnerIcon from "../../icons/beginner.png";
import ProIcon from "../../icons/pro.png";
import BusinessIcon from "../../icons/business.png";

const SectionTariff = () => {
  return (
    <section className={style.sectionTariff + " " + "container"}>
      <h2 className={style.title}>наши тарифы</h2>
      <div className={style.cardWrapper}>
        <TariffCard
          checked={true}
          title="Beginner"
          description="Для небольшого исследования"
          icon={BeginnerIcon}
          backgroundColor="#FFB64F"
          price="799"
          lowPrice="1200"
          instalment="150"
          structureItem={[
            "Безлимитная история запросов",
            "Безопасная сделка",
            "Поддержка 24/7",
          ]}
        />
        <TariffCard
          checked={false}
          title="Pro"
          description="Для HR и фрилансеров"
          icon={ProIcon}
          backgroundColor="#7CE3E1"
          price="1299"
          lowPrice="2600"
          instalment="279"
          structureItem={[
            "Все пункты тарифа Beginner",
            "Экспорт истории",
            "Рекомендации по приоритетам",
          ]}
        />
        <TariffCard
          checked={false}
          title="Business"
          description="Для корпоративных клиентов"
          icon={BusinessIcon}
          backgroundColor="#000000"
          color="#ffffff"
          price="2379"
          lowPrice="3700"
          structureItem={[
            "Все пункты тарифа Pro",
            "Безлимитное количество запросов",
            "Приоритетная поддержка",
          ]}
        />
      </div>
    </section>
  );
};
export default SectionTariff;
