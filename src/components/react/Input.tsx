import s from "../../styles/components/Input.module.css";

interface Props {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  autoComplete?: boolean;
}

export const Input = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  required,
  autoComplete,
}: Props) => {
  return (
    <div className={s.group}>
      <input
        className={s.input}
        placeholder=""
        type={type}
        name={name}
        defaultValue={value}
        onChange={onChange}
        required={required || false}
        autoComplete={autoComplete ? "on" : "off"}
      />
      <label className={s.label}>{placeholder}</label>
    </div>
  );
};
