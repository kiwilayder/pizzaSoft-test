import { useState } from "react";

export const useInput = (data) => {
   const [value, setValue] = useState(data);

   const onChange = (currentValue) => {
      setValue(currentValue);
   };

   return { value, onChange };
};
