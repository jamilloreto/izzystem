import s from "../../styles/components/TextArea.module.css";

interface Props {
  name: string;
  placeholder: string;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  required?: boolean;
  autoComplete?: boolean;
}

export const TextArea = ({
  name,
  placeholder,
  value,
  onChange,
  required,
  autoComplete,
}: Props) => {
  return (
    <textarea
      className={s.textarea}
      name={name}
      rows={3}
      placeholder={placeholder}
      defaultValue={value}
      onChange={onChange}
      required={required || false}
      autoComplete={autoComplete ? "on" : "off"}
    />
  );
};
