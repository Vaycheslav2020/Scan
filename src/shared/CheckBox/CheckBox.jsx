import style from "./CheckBox.module.scss";

const CheckBox = ({ children, name, id, checked = false }) => {
  return (
    <>
      <input
        className={style.checkbox}
        type="checkbox"
        name={name}
        id={id}
        // checked={checked}
      />
      <label className={style.labelCheckbox} htmlFor={id}>
        {children}
      </label>
    </>
  );
};
export default CheckBox;
