import style from "./Input.module.scss";

const Input = ({label, type}) => {
  return (
    <label className={style.label}>
    {label? label : null}
      <input className={style.input} type={type} />
    </label>
  )
}
export default Input;