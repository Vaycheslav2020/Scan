import style from "./SectionForm.module.scss";
//
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// store
import { handleLogin, handlePassword } from "../../formSlice";
import { onAuth } from "../../../../service/authorization";
// components
import Input from "../../../../shared/Input/Input";
import Button from "../../../../shared/Button/Button";
import Accounts from "../Accounts/Accounts";

const SectionForm = () => {
  const { loginValue, passwordValue, fieldValidationErrors } = useSelector(
    (state) => state.formState
  );
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    onAuth(event, loginValue, passwordValue);
    dispatch(handleLogin(""));
    dispatch(handlePassword(""));
  };

  return (
    <form
      className={style.form}
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <div className={style.links}>
        <Link className={style.link + " " + style._active} to={"/login"}>
          Войти
        </Link>
        <Link className={style.link} to={"/registration"}>
          Зарегистрироваться
        </Link>
      </div>

      <Input
        label="Логин или номер телефона:"
        type="text"
        name="login"
        onInputChange={(value) => dispatch(handleLogin(value))}
        inputValue={loginValue}
        errorMassage="Введите корректные данные"
        error={fieldValidationErrors.login}
      />
      <Input
        label="Пароль:"
        type="password"
        name="password"
        onInputChange={(value) => dispatch(handlePassword(value))}
        inputValue={passwordValue}
        errorMassage="Неправильный пароль"
        error={fieldValidationErrors.password}
      />

      {fieldValidationErrors.error? fieldValidationErrors.error : null}

      <Button
        isDisabled={!fieldValidationErrors.login || !fieldValidationErrors.password}
        className={style.button}
      >
        Войти
      </Button>
      <Link className={style.recover} to={"/recover%password"}>
        Восстановить пароль
      </Link>
      <Accounts />
    </form>
  );
};
export default SectionForm;
