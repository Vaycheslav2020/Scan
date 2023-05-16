import style from "./SectionGeneralSummary.module.scss";
//
import ArrowLeft from "../../../icons/arrow-left.png";
import ArrowRight from "../../../icons/arrow-right.png";
// swiper
import { Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/scss";

const SectionGeneralSummary = () => {
  return (
    <section className={style.section + " container"}>
      <h3 className={style.title}>Общая сводка</h3>
      <p className={style.textInfo}>Найдено 4 221 вариантов</p>

      <div className={style.wrapper}>
        <Swiper
          slidesPerView={9}
          modules={[Navigation]}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          className={style.swiperWrapper}
        >
          <SwiperSlide
            className={style.parametersSlide + " " + style.swiperSlide}
          >
            <span>Период</span>
            <span>Всего</span>
            <span>Риски</span>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <span>10.09.2021</span>
            <span>5</span>
            <span>5</span>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <span>10.09.2021</span>
            <span>5</span>
            <span>5</span>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <span>10.09.2021</span>
            <span>5</span>
            <span>5</span>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <span>10.09.2021</span>
            <span>5</span>
            <span>5</span>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <span>10.09.2021</span>
            <span>5</span>
            <span>5</span>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <span>10.09.2021</span>
            <span>5</span>
            <span>5</span>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <span>10.09.2021</span>
            <span>5</span>
            <span>5</span>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <span>10.09.2021</span>
            <span>5</span>
            <span>5</span>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <span>10.09.2021</span>
            <span>5</span>
            <span>5</span>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <span>10.09.2021</span>
            <span>5</span>
            <span>5</span>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <span>10.09.2021</span>
            <span>5</span>
            <span>5</span>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <span>10.09.2021</span>
            <span>5</span>
            <span>5</span>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <span>10.09.2021</span>
            <span>5</span>
            <span>5</span>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <span>10.09.2021</span>
            <span>5</span>
            <span>5</span>
          </SwiperSlide>
        </Swiper>
        <button className={style.slideButton + " " + style.prev + " prev"}>
          <img src={ArrowLeft} alt="slide prev" />
        </button>
        <button className={style.slideButton + " " + style.next + " next"}>
          <img src={ArrowRight} alt="slide next" />
        </button>
      </div>
    </section>
  );
};
export default SectionGeneralSummary;
