import style from "./CheckBox.module.scss";

const CheckBox = ({ onChange, isChecked, children, name, id }) => {
  return (
    <>
      <input
        className={style.checkbox}
        type="checkbox"
        name={name}
        id={id}
        onChange={(e) => {
          onChange(e.target.checked);
        }}
        checked={isChecked}
      />
      <label className={style.labelCheckbox} htmlFor={id}>
        {children}
      </label>
    </>
  );
};
export default CheckBox;
