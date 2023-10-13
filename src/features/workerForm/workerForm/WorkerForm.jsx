import { useState } from "react";
import { useInput } from "../../../hooks/useInput";
import style from "./WorkerForm.module.scss";
import { NavLink, Navigate } from "react-router-dom";
import { InputText } from "../../../ui/inputText/InputText";
import { InputCheckbox } from "../../../ui/inputCheckbox/InputCheckbox";
import { InputPhone } from "../../../ui/inputPhone/InputPhone";
import { InputBirthday } from "../../../ui/inputBirthday/InputBirthday";
import Select from "react-select";
import { isEqual } from "../../../helpers/isEqual";

const options = [
   { value: "driver", label: "Водитель" },
   { value: "waiter", label: "Официант" },
   { value: "cook", label: "Повар" },
];

export const WorkerForm = ({ person, setDataWorker }) => {
   const [isChangeWorker, setIsChangeWorker] = useState(true);
   const [isNavigate, setIsNavigate] = useState(false);
   const [workerDataDone, setWorkerDataDone] = useState(false);
   const [selectedOption, setSelectedOption] = useState(options.find((work) => work.value === person?.role));

   const inputName = useInput(person?.name || "");
   const inputPhone = useInput(person?.phone || "");
   const inputBirthday = useInput(person?.birthday || "");
   const inputIsArchive = useInput(person?.isArchive || false);

   const InputIsNotEmpty = !(
      inputName?.value &&
      inputPhone?.value &&
      inputBirthday?.value &&
      selectedOption?.value
   );

   const submitWorker = (person, e) => {
      e.preventDefault();
      if (InputIsNotEmpty) {
         return setWorkerDataDone(true);
      }
      const changeWorker = {
         ...person,
         name: inputName.value,
         isArchive: inputIsArchive.value,
         birthday: inputBirthday.value,
         phone: inputPhone.value,
         role: selectedOption.value,
      };

      if (person) {
         if (!isEqual(person, changeWorker)) {
            setDataWorker(changeWorker);
            return setIsNavigate(true);
         }
         return setIsChangeWorker(false);
      }

      setDataWorker(changeWorker);
      setIsNavigate(true);
   };

   if (isNavigate) return <Navigate to={"/"} />;

   return (
      <form className={style.form}>
         <h1 className={style.titleForm}>{person ? "Редактирование сотрудника" : "Добавить сотрудника"}</h1>
         <InputText
            valueInput={inputName.value}
            labelText={"Имя сотрудника: "}
            onChangeInput={inputName.onChange}
         />
         <span className={style.label}>Должность: </span>
         <Select defaultValue={selectedOption} onChange={(e) => setSelectedOption(e)} options={options} />
         <InputPhone
            valueInput={inputPhone.value}
            labelText={"Телефон: "}
            onChangeInput={inputPhone.onChange}
         />
         <InputBirthday
            valueInput={inputBirthday.value}
            labelText={"Дата рождения: "}
            onChangeInput={inputBirthday.onChange}
         />

         <div className={style.checkboxWrapper}>
            <InputCheckbox
               valueInput={inputIsArchive.value}
               labelText={"В архиве "}
               onChangeInput={inputIsArchive.onChange}
            />
         </div>
         <div className={style.buttonWrapper}>
            <NavLink className={style.button} to="/">
               Назад
            </NavLink>
            <button onClick={(e) => submitWorker(person || {}, e)} className={style.button}>
               Готово
            </button>
         </div>

         {workerDataDone && <div className={style.warning}>Не полные данные</div>}
         {!isChangeWorker && <div className={style.warning}>Нет изменений</div>}
      </form>
   );
};
