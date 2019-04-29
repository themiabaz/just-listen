// this method was unsuccessful, following instructions from: https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/

import React from "react";
import { useNewForm } from "./useNewForm";
import playJI from "./playJI";

export function NewForm(props) {
  const { value: tn, bind: bindTn } = useNewForm("");
  const { value: ld, bind: bindLd } = useNewForm("");
  const { value: br, bind: bindBr } = useNewForm("");
  const { value: bs, bind: bindBs } = useNewForm("");
  const { value: mel, bind: bindMel } = useNewForm("");

  const handleSubmit = evt => {
    evt.preventDefault();
    playJI();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        tenor:
        <input type="text" {...bindTn} />
      </label>
      <label>
        lead:
        <input type="text" {...bindLd} />
      </label>
      <label>
        bari:
        <input type="text" {...bindBr} />
      </label>
      <label>
        bass:
        <input type="text" {...bindBs} />
      </label>
      <label>
        melody:
        <input type="text" {...bindMel} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
export default NewForm;
