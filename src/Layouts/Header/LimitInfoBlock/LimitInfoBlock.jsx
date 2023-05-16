import style from "./LimitInfoBlock.module.scss";

const LimitInfoBlock = () => {
  return (
    <div className={style.box}>
      <p>
        Использовано компаний <span className={style.used}>34</span>
      </p>
      <p>
        Лимит по компаниям<span className={style.limit}>100</span>
      </p>
    </div>
  );
};
export default LimitInfoBlock;
