import style from "./CheckBox.module.scss";

const CheckBox = ({ children, name, id, isChecked = false }) => {

  return (
    <>
      <input
        className={style.checkbox}
        type="checkbox"
        name={name}
        id={id}
        defaultChecked={isChecked}
      />
      <label className={style.labelCheckbox} htmlFor={id}>
        {children}
      </label>
    </>
  );
};
export default CheckBox;
