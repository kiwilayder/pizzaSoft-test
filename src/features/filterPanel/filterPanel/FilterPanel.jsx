import style from "./FilterPanel.module.scss";
import { InputCheckbox } from "../../../ui/inputCheckbox/InputCheckbox";
import { useInput } from "../../../hooks/useInput";
import Select from "react-select";
import { useEffect, useState } from "react";

const options = [
   { value: "all", label: "Все" },
   { value: "driver", label: "Водитель" },
   { value: "waiter", label: "Официант" },
   { value: "cook", label: "Повар" },
];

export const FilterPanel = ({ setSearchParams }) => {
   const [sort, setSort] = useState("");
   const [selectedOption, setSelectedOption] = useState(options[0]);

   const inputIsArchive = useInput(false);

   useEffect(() => {
      const param = {};

      if (selectedOption.value !== "all") param.work = selectedOption.value;
      if (inputIsArchive.value) param.isArchive = true;
      if (sort) param.sort = sort;

      setSearchParams(param);
   }, [inputIsArchive.value, sort, selectedOption]);

   return (
      <div className={style.filterPanel}>
         <div className={style.filterWrapper}>
            <span className={style.label}>Фильтровать: </span>
            <div>
               <span>В архиве: </span>
               <InputCheckbox
                  label
                  labelText={"В архиве: "}
                  onChangeInput={inputIsArchive.onChange}
                  valueInput={inputIsArchive.value}
               />
            </div>
            <span>По должности: </span>

            <Select
               className={style.select}
               defaultValue={selectedOption}
               onChange={(e) => setSelectedOption(e)}
               options={options}
            />
         </div>
         <div className={style.sortWrapper}>
            <span className={style.label}>Сортировать: </span>
            <button onClick={() => setSort("name")} className={style.button}>
               по имени
            </button>
            <button onClick={() => setSort("birthday")} className={style.button}>
               по дате рождения
            </button>
         </div>
      </div>
   );
};
