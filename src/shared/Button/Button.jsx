import style from "./Button.module.scss";

const Button = ({ children, onSend, className = null, styleCustom = null }) => {
  return (
    <button
      type="submit"
      className={style.button + " " + className}
      onClick={onSend}
      style={styleCustom}
    >
      {children}
    </button>
  );
};

export default Button;
