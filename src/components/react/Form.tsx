import s from "../../styles/components/Form.module.css";
interface Props {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  disable: boolean;
  btnName?: string;
  sending: boolean;
  id?: string;
}

export const Form = ({
  children,
  onSubmit,
  disable,
  btnName,
  sending,
  id,
}: Props) => {
  return (
    <form id={id} className={s.form} onSubmit={onSubmit}>
      {children}
      <button disabled={disable} type="submit" className={s.submitBtn}>
        {sending ? <p>Loading...</p> : <span>{btnName || "Guardar"}</span>}
      </button>
    </form>
  );
};
