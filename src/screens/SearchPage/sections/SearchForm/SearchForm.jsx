import style from "./SearchForm.module.scss";

import Input from "../../../../shared/Input/Input";
import CheckBox from "../../../../shared/CheckBox/CheckBox";

const SearchForm = () => {
  return (
    <form className={style.form} action="#">
      <Input label="ИНН компании *" className={style.input} type="number" placeholder="10 цифр" />
      <CheckBox id="#">dsfghgjhj</CheckBox>
    </form>
  );
};
export default SearchForm;
