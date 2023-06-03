import style from "./Select.module.scss";

const Select = ({ options, onSelected, className, name, selected }) => {
  return (
    <div className={style.selectWrapper + " " + className}>
      <select onChange={(e)=>{onSelected(e.target.value)}} name={name} value={selected}>
        {options
          ? options.map((children, idx) => {
              return (
                <option key={idx} value={children.value}>
                  {children.label}
                </option>
              );
            })
          : null}
      </select>
    </div>
  );
};
export default Select;
