import { useEffect, useState } from "react";
//
import style from "./SectionImage.module.scss";
//
import Background from "../../images/home-image-2.png";
import MobileBackground from "../../images/home-image-m2.png";

const SectionImage = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 576px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 576px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  return (
    <section className={style.section}>
      <figure className="container">
        {matches && (
          <img
            className={style.image}
            src={Background}
            alt="background image"
          />
        )}
        {!matches && (
          <img
            className={style.image}
            src={MobileBackground}
            alt="background image"
          />
        )}
      </figure>
    </section>
  );
};
export default SectionImage;
