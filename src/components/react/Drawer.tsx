import s from "../../styles/components/Drawer.module.css";
import { Li } from "./Li";

interface Props {
  handler: () => void;
}

export function Drawer({ handler }: Props) {
  return (
    <aside className={s.aside}>
      <section className={s.container}>
        <header className={s.header}>
          <button onClick={handler} className={s.closeBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="icon-2xl"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </header>
        <ul className={s.ul}>
          <Li href="" title="Home" />
          <Li href="about" title="Acerca de" />
          <Li href="services" title="Servicios" />
          <Li href="technologies" title="Tecnologías" />
          <Li href="contact" title="Contacto" />
        </ul>
      </section>
    </aside>
  );
}
