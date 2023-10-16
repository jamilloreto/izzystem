import { useState } from "react";

export const useForm = (disabled: boolean) => {
  const [disable, setDisable] = useState<boolean>(disabled);
  const [sending, setSending] = useState<boolean>(false);

  return { disable, sending, setDisable, setSending };
};
