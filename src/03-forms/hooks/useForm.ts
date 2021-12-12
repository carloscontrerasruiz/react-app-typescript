import React, { ChangeEvent, FormEvent, useState } from "react";

export const useForm = <T>(initState: T) => {
  const [formData, setFormData] = useState(initState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    console.log(formData);
  };

  return {
    ...formData,
    formData,
    onChange,
    onSubmit,
  };
};
