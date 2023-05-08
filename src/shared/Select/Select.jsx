import style from "./Select.module.scss";

const Select = ({ child }) => {
  return (
    <label>
      <select>
        {child.map((children) => {
          return <option>{children}</option>;
        })}
      </select>
    </label>
  );
};
export default Select;
