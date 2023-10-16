import { useEffect, useState } from "react";
import { Form, Input, TextArea } from "../../../components/react";
import { useForm } from "../../../hooks";
import toast from "react-hot-toast";
import { validation } from "../../../utils";
import { contactSchema } from "../schemas";

interface Contact {
  dni: string;
  phone: string;
  service: string;
  description: string;
}

export function ContactUs() {
  const { disable, sending, setDisable, setSending } = useForm(true);
  const [values, setValues] = useState<Contact>({
    dni: "",
    description: "",
    phone: "",
    service: "",
  });
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisable(true);
    setSending(true);
    try {
      const { zSuccess, zMessage } = validation(contactSchema, values);
      if (!zSuccess) {
        setSending(false);
        return zMessage.map((msg) => {
          toast(msg);
        });
      }
      const formData = new FormData(e.currentTarget);
      const res = await fetch(
        "https://formsubmit.co/ajax/jamil20002302@gmail.com",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      if (!data.success) {
        setSending(false);
        return toast("Ocurrió un error");
      }
      setSending(false);
      toast("Mensaje enviado");
    } catch (err) {
      return toast(`${err}`);
    }
  };

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    values.dni && values.phone && values.service
      ? setDisable(false)
      : setDisable(true);
  }, [values]);

  return (
    <Form
      onSubmit={onSubmit}
      btnName="Contactar"
      disable={disable}
      sending={sending}
    >
      <Input
        name="dni"
        placeholder="DNI"
        type="string"
        onChange={onChange}
        value={values.dni}
        required
      />
      <Input
        name="phone"
        placeholder="Numero de celular"
        type="string"
        onChange={onChange}
        value={values.phone}
        required
      />
      <select name="service" onChange={onChange}>
        <option value="">Seleccionar servicio</option>
        <option value="Desarrollo de una web">Desarrollo de una web</option>
        <option value="Cableado estructurado">Cableado estructurado</option>
      </select>
      <TextArea
        name="description"
        placeholder="Descripción (Opcional)"
        onChange={onChange}
        value={values.description}
      />
    </Form>
  );
}
