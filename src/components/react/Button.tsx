import { useState } from "react";
import { Drawer } from "./Drawer";
import s from "../../styles/components/Button.module.css";

export function Button() {
  const [open, setOpen] = useState<boolean>(false);

  const handler = () => {
    setOpen(!open);
  };

  return (
    <>
      <button className={s.button} onClick={handler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="icon-2xl"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {open && <Drawer handler={handler} />}
    </>
  );
}
