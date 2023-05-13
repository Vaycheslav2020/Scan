import style from "./SectionInfo.module.scss";
// Import Swiper React components
import { Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/scss";

// images
import Watch from "../../icons/watch.png";
import Magnifier from "../../icons/magnifier.png";
import Shield from "../../icons/shield.png";
import ArrowLeft from "../../../icons/arrow-left.png";
import ArrowRight from "../../../icons/arrow-right.png";
// component
import SlideCardInfo from "../../../../shared/SlideCardInfo/SlideCardInfo";

const SectionInfo = () => {
  const swiper = useSwiper();
  return (
    <section className={style.section}>
      <div className="container">
        <h2 className={style.title}>Почему именно мы</h2>

        <div className={style.wrapper}>
          <Swiper
            spaceBetween={35}
            slidesPerView={3}
            modules={[Navigation]}
            navigation={{
              nextEl: ".next",
              prevEl: ".prev",
            }}
            className={style.swiperWrapper}
          >
            <SwiperSlide className={style.swiperSlide}>
              <SlideCardInfo icon={Watch} className={style.slide}>
                Высокая и оперативная скорость обработки заявки
              </SlideCardInfo>
            </SwiperSlide>
            <SwiperSlide className={style.swiperSlide}>
              <SlideCardInfo icon={Magnifier} className={style.slide}>
                Огромная комплексная база данных, обеспечивающая объективный
                ответ на запрос
              </SlideCardInfo>
            </SwiperSlide>
            <SwiperSlide className={style.swiperSlide}>
              <SlideCardInfo icon={Shield} className={style.slide}>
                Защита конфеденциальных сведений, не подлежащих разглашению по
                федеральному законодательству
              </SlideCardInfo>
            </SwiperSlide>
            <SwiperSlide className={style.swiperSlide}>
              <SlideCardInfo className={style.slide}>Slide 4</SlideCardInfo>
            </SwiperSlide>
          </Swiper>
          <button className={style.slideButton + " " + style.prev + " prev"}>
            <img src={ArrowLeft} alt="slide prev" />
          </button>
          <button className={style.slideButton + " " + style.next + " next"}>
            <img src={ArrowRight} alt="slide next" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default SectionInfo;
