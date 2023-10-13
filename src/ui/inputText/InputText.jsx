import style from "./InputText.module.scss";

export const InputText = ({ labelText, onChangeInput, valueInput }) => {
   return (
      <>
         <label className={style.label}>{labelText}</label>
         <input
            className={style.input}
            onChange={(e) => onChangeInput(e.target.value)}
            value={valueInput}
            type="text"
         />
      </>
   );
};
