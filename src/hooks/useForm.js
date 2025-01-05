import { useState } from 'react';

export function useForm(initialForm = {}) {
  const [formState, setFormState] = useState(initialForm);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function handleReset() {
    setFormState(initialForm);
  }

  return {
    ...formState,
    formState,
    handleInputChange,
    handleReset,
  };
}
