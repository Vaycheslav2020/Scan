import style from "./SectionSummary.module.scss";
//
import ArrowLeft from "../../../icons/arrow-left.png";
import ArrowRight from "../../../icons/arrow-right.png";
// swiper
import { Navigation, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/scss";
// format date
import dateFormat from "dateformat";
// loader component
import Loader from "../../../../shared/Loader/Loader";

const SectionSummary = ({ histograms }) => {
  return (
    <div className={style.wrapper}>
      <Swiper
        slidesPerView={9}
        modules={[Navigation, Virtual]}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        className={style.swiperWrapper}
        virtual
      >
        <SwiperSlide
          className={style.parametersSlide + " " + style.swiperSlide}
          data-swiper-slide-index="0"
        >
          <span>Период</span>
          <span>Всего</span>
          <span>Риски</span>
        </SwiperSlide>
        {histograms.length ? (
          histograms.map((item, idx) => {
            if (item.histogramType === "totalDocuments") {
              return item.data.map((total) => {
                if (item.histogramType === "riskFactors") {
                  return item.data.map((risk) => {
                    return (
                      <SwiperSlide
                        className={style.swiperSlide}
                        key={idx}
                        virtualIndex={idx}
                      >
                        <span>
                          {dateFormat(total.date || risk.date, "mm.dd.yyyy")}
                        </span>
                        <span>{total.value || 0}</span>
                        <span>{risk.value || 0}</span>
                      </SwiperSlide>
                    );
                  });
                }
                return (
                  <SwiperSlide
                    className={style.swiperSlide}
                    key={idx}
                    virtualIndex={idx}
                  >
                    <span>{dateFormat(total.date, "mm.dd.yyyy")}</span>
                    <span>{total.value || 0}</span>
                    <span>0</span>
                  </SwiperSlide>
                );
              });
            }
          })
        ) : (
          <Loader className={style.loader} />
        )}
      </Swiper>

      <button className={style.slideButton + " " + style.prev + " prev"}>
        <img src={ArrowLeft} alt="slide prev" />
      </button>
      <button className={style.slideButton + " " + style.next + " next"}>
        <img src={ArrowRight} alt="slide next" />
      </button>
    </div>
  );
};
export default SectionSummary;
