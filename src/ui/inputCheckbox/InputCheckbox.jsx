import style from "./InputCheckbox.module.scss";

export const InputCheckbox = ({ label, labelText, onChangeInput, valueInput }) => {
   return (
      <>
         {!label && <label className={style.labelCheckbox}>{labelText}</label>}
         <input
            className={style.checkbox}
            name="isArchive"
            type="checkbox"
            checked={valueInput}
            onChange={(e) => onChangeInput(e.target.checked)}
         />
      </>
   );
};
