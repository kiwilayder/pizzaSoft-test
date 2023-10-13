import { InputMask } from "@react-input/mask";
import style from "./InputBirthday.module.scss";

export const InputBirthday = ({ labelText, onChangeInput, valueInput }) => {

   return (
      <>
         <label className={style.label}>{labelText}</label>
         <InputMask
            className={style.input}
            onChange={(e) => onChangeInput(e.target.value)}
            value={valueInput}
            mask="__.__.____"
            replacement={{ _: /\d/ }}
         />
      </>
   );
};
