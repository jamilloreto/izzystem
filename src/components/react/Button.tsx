import { useState } from "react";
import { Drawer } from "./Drawer";

export function Button() {
  const [open, setOpen] = useState<boolean>(false);

  const handler = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="wrapButton">
        <button className="button" onClick={handler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="icon-xl"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      {open && <Drawer handler={handler} />}
    </>
  );
}
