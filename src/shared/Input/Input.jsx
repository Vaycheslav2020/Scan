import style from "./Input.module.scss";

const Input = ({
  label,
  className = "",
  type,
  name,
  placeholder,
  onInputChange,
  inputValue,
  errorMassage,
  error,
}) => {
  return (
    <div
      className={
        style.label + " " + className + " " + (error ? style.error : null)
      }
    >
      {label ? label : null}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onInputChange}
        value={inputValue}
      />
      <span>{error ? errorMassage : "error"}</span>
    </div>
  );
};
export default Input;
