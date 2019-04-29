import { useState } from "react";

export const useForm = callback => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    // this is supposed to live here, per the tutorial...but it's breaking with it!
    // https://blog.bitsrc.io/using-react-hooks-to-create-awesome-forms-6f846a4ce57
    // callback();
  };

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};
export default useForm;
