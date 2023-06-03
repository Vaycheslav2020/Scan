import style from "./CheckBox.module.scss";

const CheckBox = ({ onChange, isChecked ,children, name, id, isDefaultChecked = false }) => {

  return (
    <>
      <input
        className={style.checkbox}
        type="checkbox"
        name={name}
        id={id}
        onChange={(e)=>{onChange(e.target.checked)}}
        checked={isChecked}
        // defaultChecked={isDefaultChecked}
      />
      <label className={style.labelCheckbox} htmlFor={id}>
        {children}
      </label>
    </>
  );
};
export default CheckBox;
