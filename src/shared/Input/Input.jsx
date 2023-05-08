import style from "./Input.module.scss";

const Input = ({ label, className, type, placeholder }) => {
  return (
    <label className={style.label + " " + className}>
      {label ? label : null}
      <input type={type} placeholder={placeholder} />
    </label>
  );
};
export default Input;
