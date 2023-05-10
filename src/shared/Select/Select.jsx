import style from "./Select.module.scss";

const Select = ({ child, className, name, id }) => {
  return (
    <div className={style.selectWrapper + " " + className}>
      <select name={name} id={id}>
        {child
          ? child.map((children, idx) => {
              const value = children.toLowerCase();
              return (
                <option key={idx} value={value}>
                  {children}
                </option>
              );
            })
          : null}
      </select>
    </div>
  );
};
export default Select;
