import s from "../../styles//components/Li.module.css";

interface Props {
  title: string;
  href: string;
}

export function Li({ href, title }: Props) {
  return (
    <a href={`/${href}`} className={s.li}>
      <span>{title}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="icon-md"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </a>
  );
}
