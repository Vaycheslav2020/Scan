import style from "./Input.module.scss";
import { useState } from "react";

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
  const handleChange = (e) => {
    onInputChange(e.target.value);
  };

  const [isError, setError] = useState(false);

  const handleBlur = () => {
    setError(!error);
  };
  const handleInput = () => {
    setError(false);
  };

  return (
    <label
      className={
        style.label + " " + className + " " + (isError ? style.error : null)
      }
    >
      {label ? label : null}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        onInput={handleInput}
        onBlur={handleBlur}
        value={inputValue}
      />
      <span>{isError ? errorMassage : null}</span>
    </label>
  );
};
export default Input;
