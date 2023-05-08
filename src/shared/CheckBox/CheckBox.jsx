import style from "./CheckBox.module.scss";

const CheckBox = ({ children, name, id }) => {
  return (
    <>
      <input className={style.checkbox} type="checkbox" name={name} id={id} />
      <label className={style.labelCheckbox} for={id}>
        {children}
      </label>
    </>
  );
};
export default CheckBox;
