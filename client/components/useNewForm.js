// this method was unsuccessful, following instructions from: https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/

import { useState } from "react";

export const useNewForm = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value);
      }
    }
  };
};
export default useNewForm;
