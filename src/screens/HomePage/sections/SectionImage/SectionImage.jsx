import style from "./SectionImage.module.scss";
import Background from "../../images/home-image-2.png";

const SectionImage = () => {
  return (
    <section className={style.section}>
      <figure className="container">
        <img className={style.image} src={Background} alt="background image" />
      </figure>
    </section>
  );
};
export default SectionImage;
