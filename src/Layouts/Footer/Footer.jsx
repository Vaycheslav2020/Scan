import style from "./Footer.module.scss";
// logo
import Logo from "../images/footer-logo.png";

const Footer = () => {
  
  return (
    <footer className={style.footer + " container"}>
      <img src={Logo} alt="Logo" />
      <div className={style.infoGroup}>
        <span>г. Москва, Цветной б-р, 40</span>
        <a href="tel:+74957712111">+7 495 771 21 11</a>
        <a href="mailto:info@skan.ru">info@skan.ru</a>
        <span className={style.copyright}>Copyright. 2022</span>
      </div>
    </footer>
  );
};
export default Footer;
