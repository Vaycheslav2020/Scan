import style from "./SectionForm.module.scss";
//
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
// service
import { onAuth } from "../../../../service/authorization";
import { deleteErrorAuth } from "../../../../store/errorAuth";
// components
import Input from "../../../../shared/Input/Input";
import Button from "../../../../shared/Button/Button";
import Accounts from "../Accounts/Accounts";

const SectionForm = () => {
  const errorAuth = useSelector((state) => state.errorAuth);
  const isAuth = useSelector((state) => state.isAuth);
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { isDirty, isValid },
  } = useForm({ mode: "onChange" });

  const onHandleSubmit = () => {
    dispatch(deleteErrorAuth());
    dispatch(onAuth(getValues("login"), getValues("password")));
    if (isAuth) {
      reset();
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(onHandleSubmit)}>
      <div className={style.links}>
        <Link className={style.link + " " + style._active} to={"/login"}>
          Войти
        </Link>
        <Link className={style.link} to={"/registration"}>
          Зарегистрироваться
        </Link>
      </div>

      <Controller
        name="login"
        control={control}
        rules={{
          required: "Введите корректные данные",
          minLength: {
            value: 6,
            message: "не менее 6 символов",
          },
        }}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Input
            label="Логин или номер телефона:"
            type="text"
            name="login"
            onInputChange={onChange}
            inputValue={value}
            errorMassage={error?.message}
            error={error || errorAuth.errorAuth}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        rules={{
          required: "Неправильный пароль",
          minLength: {
            value: 6,
            message: "введите не менее 6 цифр или букв",
          },
        }}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Input
            label="Пароль:"
            type="password"
            name="password"
            onInputChange={onChange}
            inputValue={value}
            errorMassage={error?.message}
            error={error || errorAuth.errorAuth}
          />
        )}
      />

      <p className={style.error}>{errorAuth ? errorAuth.errorAuth : null}</p>

      <Button isDisabled={!isDirty || !isValid} className={style.button}>
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
