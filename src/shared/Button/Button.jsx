import style from "./Button.module.scss";

const Button = ({
  type,
  children,
  onSend,
  className = "",
  styleCustom = null,
  isDisabled = false,
  isShow = false,
}) => {
  return (
    <>
      {isShow ? null : (
        <button
          type={type}
          className={style.button + " " + className}
          onClick={onSend}
          style={styleCustom}
          disabled={isDisabled}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
