import style from "./SearchForm.module.scss";
// components
import Input from "../../../../shared/Input/Input";
import CheckBox from "../../../../shared/CheckBox/CheckBox";
import Select from "../../../../shared/Select/Select";
import Button from "../../../../shared/Button/Button";
// picker
import React, { useState } from "react";
import DatePicker from "react-date-picker";
// picker style
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

const SearchForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [startDateTwo, setStartDateTwo] = useState(new Date());
  return (
    <form className={style.form} action="#">
      <div className={style.wrapper}>
        <Input
          label="ИНН компании *"
          className={style.input}
          type="number"
          placeholder="10 цифр"
        />
        <label className={style.selectLabel}>
          Тональность
          <Select
            className={style.select}
            child={["Любая", "Любая", "Любая"]}
            name="select"
            id="select"
          />
        </label>

        <Input
          label="Количество документов в выдаче *"
          className={style.input}
          type="number"
          placeholder="От 1 до 1000"
        />
        <div className={style.dateWrapper}>
          <span>Диапазон поиска *</span>
          <div className={style.pickerBox}>
            <div className={style.pickerWrapper}>
              <DatePicker
                className={style.picker}
                value={startDate}
                calendarIcon={null}
                clearIcon={null}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className={style.pickerWrapper}>
              <DatePicker
                className={style.picker}
                value={startDateTwo}
                calendarIcon={null}
                clearIcon={null}
                onChange={(date) => setStartDateTwo(date)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={style.wrapper}>
        <CheckBox id="completeness" name="completeness" isChecked={true}>
          Признак максимальной полноты
        </CheckBox>
        <CheckBox id="businessContext" name="businessContext" isChecked={true}>
          Упоминания в бизнес-контексте
        </CheckBox>
        <CheckBox id="mainRole" name="mainRole" isChecked={true}>
          Главная роль в публикации
        </CheckBox>
        <CheckBox id="riskFactors" name="riskFactors">
          Публикации только с риск-факторами
        </CheckBox>
        <CheckBox id="technicalNews" name="technicalNews">
          Включать технические новости рынков
        </CheckBox>
        <CheckBox id="announcements" name="announcements" isChecked={true}>
          Включать анонсы и календари
        </CheckBox>
        <CheckBox id="summaries" name="summaries">
          Включать сводки новостей
        </CheckBox>

        <div className={style.submitWrap}>
          <Button>Поиск</Button>
          <p className={style.hint}>* Обязательные к заполнению поля</p>
        </div>
      </div>
    </form>
  );
};
export default SearchForm;
