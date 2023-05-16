import style from "./Button.module.scss";

const Button = ({
  children,
  onSend,
  className = null,
  styleCustom = null,
  isDisabled = false,
}) => {
  return (
    <button
      className={style.button + " " + className}
      onClick={onSend}
      style={styleCustom}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
