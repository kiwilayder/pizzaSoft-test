import { InputMask } from "@react-input/mask";
import style from "./InputPhone.module.scss";

export const InputPhone = ({ labelText, onChangeInput, valueInput }) => {
   return (
      <>
         <label className={style.label}>{labelText}</label>
         <InputMask
            className={style.input}
            onChange={(e) => onChangeInput(e.target.value)}
            value={valueInput}
            mask="+7 (___) ___-____"
            replacement={{ _: /\d/ }}
         />
      </>
   );
};
