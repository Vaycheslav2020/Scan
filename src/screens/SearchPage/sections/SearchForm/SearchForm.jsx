import style from "./SearchForm.module.scss";
// components
import Input from "../../../../shared/Input/Input";
import CheckBox from "../../../../shared/CheckBox/CheckBox";
import Select from "../../../../shared/Select/Select";
import Button from "../../../../shared/Button/Button";
// picker
import DatePicker from "react-date-picker";
// picker style
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
//
import { Controller, useForm } from "react-hook-form";
// helper
import validateINN from "../../../../helpers/validateINN";
//
import { useNavigate } from "react-router-dom";
import { objectSearch } from "../../../../service/api";

const SearchForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onChange",
  });

  const navigate = useNavigate();

  const onHandleSubmit = (data) => {
    objectSearch.getData(data);
    reset();
    navigate("/documents");
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(onHandleSubmit)}>
      <div className={style.wrapper}>
        <Controller
          name="INN"
          control={control}
          rules={{
            validate: {
              required: (value) => {
                if (value) return validateINN(value);
                if (!value) return "Введите корректные данные";
              },
            },
            minLength: {
              value: 10,
              message: "ИНН должен состоять из 10 или 12 цифр",
            },
            maxLength: {
              value: 12,
              message: "ИНН должен состоять из 10 или 12 цифр",
            },
          }}
          defaultValue="7710137066"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Input
              label="ИНН компании *"
              className={style.input}
              type="number"
              placeholder="10 цифр"
              inputValue={value}
              onInputChange={(newVal) => {
                onChange(newVal);
              }}
              errorMassage={error?.message}
              error={error}
            />
          )}
        />

        <div className={style.selectLabel}>
          Тональность *
          <Controller
            name="tonality"
            control={control}
            defaultValue="any"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Select
                className={style.select}
                options={[
                  { label: "Любая", value: "any" },
                  { label: "позитивная", value: "positive" },
                  { label: "негативная", value: "negative" },
                ]}
                onSelected={onChange}
                selected={value}
                name="select"
                id="select_tonality"
              />
            )}
          />
        </div>

        <Controller
          name="quantity"
          control={control}
          rules={{
            required: "Обязательное поле",
            minLength: 1,
            maxLength: 4,
            min: { value: 1, message: "количество не менее 1" },
            max: { value: 1000, message: "количество не более 1000" },
          }}
          defaultValue="1000"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Input
              label="Количество документов в выдаче *"
              className={style.input}
              type="number"
              placeholder="От 1 до 1000"
              inputValue={value}
              onInputChange={(newVal) => {
                onChange(newVal);
              }}
              errorMassage={error?.message}
              error={error}
            />
          )}
        />

        <div
          className={
            style.dateWrapper +
            " " +
            (errors.datePickerStart && errors.datePickerFinish
              ? style.error
              : "")
          }
        >
          <span>Диапазон поиска *</span>
          <div className={style.pickerBox}>
            <div className={style.pickerWrapper}>
              <Controller
                name="datePickerStart"
                control={control}
                rules={{
                  required: "Введите корректные данные",
                }}
                defaultValue={new Date("2019/01/01")}
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    dateFormat="yyyy/MM/dd"
                    className={style.picker}
                    value={value}
                    maxDate={watch("datePickerEnd") || new Date()}
                    calendarIcon={null}
                    clearIcon={null}
                    onChange={onChange}
                  />
                )}
              />
            </div>
            <div className={style.pickerWrapper}>
              <Controller
                name="datePickerEnd"
                control={control}
                rules={{
                  required: "Введите корректные данные",
                }}
                defaultValue={new Date("2022/08/31")}
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    dateFormat="yyyy/MM/dd"
                    className={style.picker}
                    value={value}
                    maxDate={new Date()}
                    minDate={watch("datePickerStart") || new Date()}
                    calendarIcon={null}
                    clearIcon={null}
                    onChange={onChange}
                  />
                )}
              />
            </div>
          </div>
          <span className={style.errorMassage}>
            {errors.datePickerStart && errors.datePickerEnd
              ? "Введите корректные данные"
              : "error"}
          </span>
        </div>
      </div>
      <div className={style.wrapper}>
        <Controller
          name="completeness"
          control={control}
          defaultValue={true}
          render={({ field: { onChange, value } }) => (
            <CheckBox
              onChange={onChange}
              isChecked={value}
              id="completeness"
              name="completeness"
            >
              Признак максимальной полноты
            </CheckBox>
          )}
        />

        <Controller
          name="businessContext"
          control={control}
          defaultValue={false}
          render={({ field: { onChange, value } }) => (
            <CheckBox
              onChange={onChange}
              isChecked={value}
              id="businessContext"
              name="businessContext"
            >
              Упоминания в бизнес-контексте
            </CheckBox>
          )}
        />

        <Controller
          name="mainRole"
          control={control}
          defaultValue={true}
          render={({ field: { onChange, value } }) => (
            <CheckBox
              onChange={onChange}
              isChecked={value}
              id="mainRole"
              name="mainRole"
            >
              Главная роль в публикации
            </CheckBox>
          )}
        />

        <Controller
          name="riskFactors"
          control={control}
          defaultValue={false}
          render={({ field: { onChange, value } }) => (
            <CheckBox
              onChange={onChange}
              isChecked={value}
              id="riskFactors"
              name="riskFactors"
            >
              Публикации только с риск-факторами
            </CheckBox>
          )}
        />

        <Controller
          name="technicalNews"
          control={control}
          defaultValue={true}
          render={({ field: { onChange, value } }) => (
            <CheckBox
              onChange={onChange}
              isChecked={value}
              id="technicalNews"
              name="technicalNews"
            >
              Включать технические новости рынков
            </CheckBox>
          )}
        />

        <Controller
          name="announcements"
          control={control}
          defaultValue={true}
          render={({ field: { onChange, value } }) => (
            <CheckBox
              onChange={onChange}
              isChecked={value}
              id="announcements"
              name="announcements"
            >
              Включать анонсы и календари
            </CheckBox>
          )}
        />

        <Controller
          name="summaries"
          control={control}
          defaultValue={true}
          render={({ field: { onChange, value } }) => (
            <CheckBox
              onChange={onChange}
              isChecked={value}
              id="summaries"
              name="summaries"
            >
              Включать сводки новостей
            </CheckBox>
          )}
        />
        <div className={style.submitWrap}>
          <Button type="submit" isDisabled={!isDirty || !isValid}>
            Поиск
          </Button>
          <p className={style.hint}>* Обязательные к заполнению поля</p>
        </div>
      </div>
    </form>
  );
};
export default SearchForm;
